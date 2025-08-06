import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Movimentacao() {

  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}>Movimentação do Cubo</Text>

      <Text style={estilos.texto}>
        A movimentação do cubo mágico é padronizada e segue uma notação internacional com letras que representam cada face. É essencial entender como essas rotações funcionam, pois toda resolução depende da execução correta dos movimentos.
      </Text>

      <Text style={estilos.texto}>
        Comece aprendendo os movimentos básicos e a notação utilizada. Isso inclui movimentos como R, L, U, D, F e B, que representam as rotações das faces direita, esquerda, superior, inferior, frontal e traseira, respectivamente.
      </Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/MovimentacaoBasica.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Movimentação Básica</Text>
        <Text style={estilos.cardDescricao}>Aprenda as movimentações básicas do cubo mágico.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>
        Após dominar os movimentos básicos, é hora de evoluir. A movimentação avançada envolve sequências mais complexas (algoritmos) que manipulam múltiplas peças ao mesmo tempo, com o mínimo de impacto no restante do cubo.
      </Text>

      <Text style={estilos.texto}>
        Estas técnicas são fundamentais para acelerar a resolução e entrar no mundo do Speedcubing. Você aprenderá a utilizar giros em bloco, movimentos em fatias e algoritmos otimizados.
      </Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/MovimentacaoAvancada.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Movimentação Avançada</Text>
        <Text style={estilos.cardDescricao}>Aprenda as movimentações avançadas do cubo mágico.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>
        Se você já está familiarizado com a movimentação básica e avançada, confira o Método Básico, onde você encontrará fórmulas e técnicas para resolver o cubo mágico de forma eficiente e fácil.
      </Text>

      <View style={estilos.footer}>
        <Text style={{ color: '#666', textAlign: 'center' }}>© 2025 CuboTutorial. Todos os direitos reservados.</Text>
        <Text style={{ color: '#666' }}>Desenvolvido por Felipe Cagnin - Ver 1.2.0</Text>
      </View>

    </ScrollView>
  );
}

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
    marginBottom: 10,
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
    width: 350,
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
  },
});
