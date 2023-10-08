// Definindo a classe Hero
class Hero {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
      this.ataque = 0;
      this.defesa = 0;
    }
  
    calcularAtaque() {
      switch (this.tipo) {
        case "mago":
          return 10;
        case "guerreiro":
          return 15;
        case "monge":
          return 12;
        case "ninja":
          return 14;
        default:
          return 0;
      }
    }
  
    calcularDefesa() {
      switch (this.tipo) {
        case "mago":
          return 5;
        case "guerreiro":
          return 10;
        case "monge":
          return 8;
        case "ninja":
          return 7;
        default:
          return 0;
      }
    }
  }
  
  // Função para criar um herói com base na entrada do usuário
  function criarHeroi() {
    const nome = prompt("Digite o nome do herói:");
    const tipo = prompt("Digite o tipo do herói (mago, guerreiro, monge, ninja):");
  
    const heroi = new Hero(nome, tipo);
    heroi.ataque = heroi.calcularAtaque();
    heroi.defesa = heroi.calcularDefesa();
    return heroi;
  }
  
  // Função para realizar uma batalha entre dois heróis
  function batalha(heroi1, heroi2) {
    console.log(`Batalha entre ${heroi1.nome} (${heroi1.tipo}) e ${heroi2.nome} (${heroi2.tipo}):`);
    console.log(`${heroi1.nome} - Ataque: ${heroi1.ataque} - Defesa: ${heroi1.defesa}`);
    console.log(`${heroi2.nome} - Ataque: ${heroi2.ataque} - Defesa: ${heroi2.defesa}`);
  
    const dano1 = Math.max(0, heroi1.ataque - heroi2.defesa);
    const dano2 = Math.max(0, heroi2.ataque - heroi1.defesa);
  
    if (dano1 > dano2) {
      console.log(`${heroi1.nome} vence com ${dano1} de dano!`);
    } else if (dano2 > dano1) {
      console.log(`${heroi2.nome} vence com ${dano2} de dano!`);
    } else {
      console.log("A batalha termina em empate!");
    }
  }
  
  // Loop para criar heróis e fazer com que eles lutem
  const jogador1 = criarHeroi();
  const escolha = prompt("Deseja jogar contra outro jogador (PvP) ou contra a CPU (CvC)? (PvP/CvC)").toLowerCase();
  
  if (escolha === "pvp") {
    const jogador2 = criarHeroi();
    batalha(jogador1, jogador2);
  } else if (escolha === "cvc") {
    const cpu = new Hero("CPU", "mago"); // A CPU é um mago neste exemplo
    batalha(jogador1, cpu);
  } else {
    console.log("Escolha inválida. Reinicie o jogo e escolha entre PvP ou CvC.");
  }