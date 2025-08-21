export const cards = [
  {
    key: "passo1",
    titulo: "1º Passo",
    descricao: "Preparação intuitiva da cruz branca no topo.",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso01.png"),
  },
  {
    key: "passo2",
    titulo: "2º passo",
    descricao: "Alinhar cores laterais e descer meios brancos.",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso02.png"),
  },
  {
    key: "passo3",
    titulo: "3º passo",
    descricao: "Inserir as 4 quinas brancas e completar a base.",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso03.png"),
  },
  {
    key: "passo4",
    titulo: "4º passo",
    descricao: "Completar os 4 meios da camada do meio.",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso04.png"),
  },
  {
    key: "passo5",
    titulo: "5º passo",
    descricao: "Formar a cruz no topo amarelo (3 casos).",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso05.png"),
  },
  {
    key: "passo6",
    titulo: "6º passo",
    descricao: "Orientar todas as quinas do topo (SUNE).",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06.png"),
  },
  {
    key: "passo7",
    titulo: "7º passo",
    descricao: "Permutar quinas da última camada.",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso07.png"),
  },
  {
    key: "passo8",
    titulo: "8º passo",
    descricao: "Permutar meios da última camada (horário/anti).",
    imagem: require("../assets/MetodoBasico/MetodoBasicoPasso08.png"),
  },
];

export const secoes = [
  {
    key: "passo1",
    titulo: "1º passo: Preparar a Cruz",
    intro:
      "Este é um passo intuitivo, sem fórmulas fixas. Prepare a cruz da maneira que achar melhor. Se precisar, assista ao vídeo do método básico e veja os exemplos abaixo:",
    casos: [
      {
        formula: "R",
        texto: "Situação mais básica: inserir o meio no topo com 1 movimento.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso01/Passo01.png"),
      },
      {
        formula: "F' R",
        texto:
          "Primeiro prepara o meio na lateral e depois insere como no caso anterior.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso01/Passo02.png"),
      },
      {
        formula: "F U' R",
        texto: "Mesmo conceito, agora com o meio vindo ao topo.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso01/Passo03.png"),
      },
      {
        formula: "U' R",
        texto:
          "Caso comum: libere o espaço girando o topo e depois insira o meio.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso01/Passo04.png"),
      },
    ],
  },
  {
    key: "passo2",
    titulo: "2º passo: Finalizar a Cruz",
    intro:
      "O passo mais simples: alinhe as cores laterais com os centros e desça os meios brancos para a base.",
    casos: [
      {
        formula: "U / U' / U2",
        texto:
          "Use U, U' ou U2 para alinhar a cor da lateral com o centro correspondente.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso02/Passo01.png"),
      },
      {
        formula: "F2",
        texto: "Movimento duplo de face para descer o meio branco à base.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso02/Passo02.png"),
      },
      {
        formula: "Repetir",
        texto:
          "Repita o processo para os 4 meios, girando apenas o topo e as faces.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso02/Passo03.png"),
      },
    ],
  },
  {
    key: "passo3",
    titulo: "3º passo: Primeira Camada",
    intro:
      "Finalize toda a camada branca inserindo as 4 quinas brancas corretamente.",
    casos: [
      {
        formula: "R U R'",
        texto:
          "Depois de alinhar as cores, mantenha a quina branca na direita e aplique a fórmula.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso03/Passo01.png"),
      },
      {
        formula: "L' U' L",
        texto:
          "Mesma situação do exemplo anterior, agora com a quina na esquerda.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso03/Passo02.png"),
      },
      {
        formula: "R U2 R' U' R U R'",
        texto: "Remova a quina do topo e insira corretamente na posição certa.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso03/Passo03.png"),
      },
      {
        formula: "Repetir",
        texto:
          "Repita até completar a primeira camada com as 4 quinas brancas.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso03/Passo04.png"),
      },
    ],
  },
  {
    key: "passo4",
    titulo: "4º passo: Segunda Camada",
    intro:
      "Neste passo nós iremos finalizar a camada do meio do cubo utilizando 4 fórmulas diferentes, dependendo da posição da peça.",
    casos: [
      {
        formula: "U R U' R' U' F' U F",
        texto:
          "Alinhe o meio com o centro da mesma cor, mantenha na sua frente e execute a fórmula para enviar a peça para a direita.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso04/Passo01.png"),
      },
      {
        formula: "U' L' U L U F U' F'",
        texto:
          "Mesma situação do primeiro exemplo, mas enviando a peça da frente para a esquerda.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso04/Passo02.png"),
      },
      {
        formula: "Destravar'",
        texto:
          "Para casos intermediários: ajuste a peça antes de enviar para a posição final.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso04/Passo03.png"),
      },
      {
        formula: "Repetir",
        texto:
          "Outro caso intermediário: ajuste a peça da frente para a esquerda antes de aplicar a fórmula completa.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso04/Passo04.png"),
      },
    ],
  },
  {
    key: "passo5",
    titulo: "5º passo: Cruz Amarela",
    intro:
      "Use a mesma fórmula alterando apenas a orientação do cubo conforme o caso (ponto, L, linha horizontal e linha vertical).",
    casos: [
      {
        formula: "F R U R' U' F'",
        texto: "Caso “ponto”, qualquer orientação com o amarelo no topo.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso05/Passo01.png"),
      },
      {
        formula: "Repetir",
        texto: "Caso “L”, mantenha a letra L no canto superior esquerdo.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso05/Passo02.png"),
      },
      {
        formula: "Repetir",
        texto: "Caso “linha horizontal”, mantenha a linha na horizontal.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso05/Passo03.png"),
      },
      {
        formula: "Analisar",
        texto:
          "Identifique qual é o seu caso e execute a fórmula para que a cruz seja solucionada..",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso05/Passo04.png"),
      },
    ],
  },
  {
    key: "passo6",
    titulo: "6º passo: Orientando as Quinas Amarelas",
    intro:
      "Agora vamos orientar as quinas do topo usando a fórmula SUNE ou sua variação. Posicione o cubo conforme o caso e aplique a fórmula até todas ficarem corretas.",
    casos: [
      {
        formula: "R U R' U R U2 R'",
        texto: "Duas quinas precisam ser orientadas: frente e direita.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo01.png"),
      },
      {
        formula: "Repetir",
        texto:
          "Duas quinas na esquerda precisam de ajuste (uma olhando para você e outra para a frente).",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo02.png"),
      },
      {
        formula: "Ajuste frontal",
        texto: "Duas quinas na frente ainda não estão orientadas corretamente.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo03.png"),
      },
      {
        formula: "Quatro quinas",
        texto:
          "Quatro quinas precisam de orientação: duas à direita e duas à esquerda.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo04.png"),
      },
      {
        formula: "Variação esquerda",
        texto:
          "Semelhante ao anterior, mas com duas quinas à esquerda (uma à sua frente e outra olhando para você).",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo05.png"),
      },
      {
        formula: "anti-SUNE",
        texto:
          "Variação Anti-SUNE: peixe com a cabeça à esquerda, três quinas erradas. Use a fórmula anti-SUNE.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo06.png"),
      },
      {
        formula: "SUNE clássico",
        texto:
          "SUNE clássico: peixe clássico com três quinas erradas. Aplique a fórmula até todas estarem corretas.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo07.png"),
      },
      {
        formula: "Analisar",
        texto:
          "Situação final: todas as quinas orientadas, verifique se o topo está correto.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso06/Passo08.png"),
      },
    ],
  },
  {
    key: "passo7",
    titulo: "7º passo: Finalizar as Quinas",
    intro:
      "Permute as quinas da última camada. Encontre um lado com 2 quinas da mesma cor e aplique a fórmula; se não houver, aplique em qualquer posição e verifique novamente.",
    casos: [
      {
        formula: "R B' R F2 R' B R F2 R2",
        texto:
          "Apenas encontre um lado com 2 quinas da mesma cor e aplique a fórmula.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso07/Passo01.png"),
      },
      {
        formula: "Repetir",
        texto:
          "Se você não encontrar nenhum lado com 2 quinas da mesma cor, aplique a mesma fórmula em qualquer posição e depois volte a procurar pelas 2 quinas.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso07/Passo02.png"),
      },
      {
        formula: "Analisar",
        texto:
          "Antes de seguir para o próximo passo, certifique-se de que todas as quinas estão nas posições corretas. Se necessário, faça o movimento U para alinhar as cores.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso07/Passo03.png"),
      },
    ],
  },
  {
    key: "passo8",
    titulo: "8º passo: Finalizar os Meios",
    intro:
      "Permute os meios da última camada posicionando a face correta nas costas do cubo. Identifique se o caso é horário ou anti-horário, ou se nenhuma face está pronta.",
    casos: [
      {
        formula: "F2 U L R' F2 L' R U F2",
        texto:
          "Caso horário: posicione a face correta atrás e execute a fórmula.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso08/Passo01.png"),
      },
      {
        formula: "F2 U' L R' F2 L' R U' F2",
        texto:
          "Caso anti-horário: única diferença é o U / U' no início e antes do último F2.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso08/Passo02.png"),
      },
      {
        formula: "Sem face pronta",
        texto:
          "Se nenhuma face estiver finalizada, aplique qualquer uma das fórmulas anteriores e depois encontre o caso correto.",
        imagem: require("../assets/MetodoBasico/MetodoBasicoPasso08/Passo03.png"),
      },
    ],
  },
];
