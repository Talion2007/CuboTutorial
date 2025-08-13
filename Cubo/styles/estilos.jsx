import { StyleSheet } from "react-native";


// Estilos
const estilos = StyleSheet.create({
  titulo: {
    fontSize: 27,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto',
    width: '80%',
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  texto: {
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'justify',
    width: '85%',
    color: '#666'
  },

  conteudoScroll: {
    flex: 1,
    padding: 15,// Adicionando um fundo claro para melhor visibilidade
    backgroundColor: '#fbfbffff', // Azul claro
  },
  conteudoCentralizado: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imagemLogo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10, // Bordas arredondadas para a imagem
    marginBottom: 20,
    marginTop: -5,
  },

  imagemCard: {
    width: 220,
    height: 220,
    resizeMode: 'contain', // Garante que a imagem se ajuste ao tamanho do card
    marginBottom: 10, // Espaço entre a imagem e o texto do card
    borderRadius: 10, // Bordas arredondadas para a imagem do card
  },

  card: {
    borderRadius: 12, // Bordas mais arredondadas
    padding: 20,
    marginVertical: 10, // Espaço vertical entre os cards
    width: '85%', // Ligeiramente mais largo para preencher a tela
    maxWidth: 400, // Limite a largura máxima para tablets
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    elevation: 2, // Sombra para dar profundidade
    backgroundColor: '#fbfbffff', // Fundo branco para contraste
    // Estilos de sombra aprimorados para um visual mais profissional
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8, // Mais espaço abaixo do título
    color: '#333', // Cor de texto mais escura
    textAlign: 'center',
  },
  cardDescricao: {
    fontSize: 14,
    color: '#666', // Cor de texto mais clara para a descrição
    textAlign: 'center',
    lineHeight: 20, // Altura da linha para melhor leitura
  },

  footer: {
    flex: 1,
    marginTop: 30,
    padding: 25,
    paddingBottom: 75,
    width: '110%',
  elevation: 8, // Sombra para dar profundidade
    backgroundColor: '#fbfbffff', // Fundo branco para contraste
    textAlign: 'center',
    minHeight: 125,
  },
    SafeArea: {
    flex: 1,
    backgroundColor: '#fbfbffff',
  },
    mensagensContainer: { flex: 1, marginBottom: 20, minHeight: '60%' },
  mensagem: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 18,
    maxWidth: '90%',
    marginBottom: 10,
  },
  mensagemPropria: {
    backgroundColor: '#34495e',
    alignSelf: 'flex-end'
  },
  mensagemOutro: {
    backgroundColor: '#bfddfbff', // Fundo branco para contraste
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  textoMensagem: {
     color: 'white', fontSize: 16 
    },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    alignItems: 'flex-end',
  },
  inputMensagem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    maxHeight:  60,
    fontSize: 16,
  },
  botaoEnviar: {
    backgroundColor: '#34495e',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoDesabilitado: { backgroundColor: '#ccc' },
  textoBotao: { fontSize: 18 },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)', // ← deixa o fundo escuro semiopaco
  },
modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: '#fbfbffff',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
},
botaoModal: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#34495e',
    marginTop: 20,
},
textoModal: {
    color: '#fbfbffff',
    textAlign: 'center',
    fontSize: 16,
},
textoDescritivoModal: {
  fontSize: 16,
  marginBottom: 5,
  marginTop: 5,
  textAlign: 'justify',
  width: '85%',
  color: '#666'
},
});

export default estilos;
