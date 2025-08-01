import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MetodoBasico() {

  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}> Método Básico</Text>
      <Text style={estilos.texto}>O cubo Mágico é um dos quebra-cabeças mais incríveis do mundo. Todo colorido e tridimensional, que pode ser misturado em 43 quintilhões de posições diferentes sendo apenas 1 a correta. Um desafio que intrigou diversas gerações e até hoje é considerado o brinquedo mais vendido do mundo.</Text>
      <Text style={estilos.texto}>Agora você pode estar pensando que, com tantas (ou praticamente infinitas) possibilidades, resolver um Cubo Mágico deve ser uma tarefa praticamente impossível. E você está quase certo. Apenas "resolver um cubo" na tentativa e erro de fato é algo completamente improvável, por isso é muito importante que você aprenda a técnica de solução. </Text>
      <Text style={estilos.texto}>Resolver o Cubo Mágico nada mais é do que seguir uma receita. São 8 passos divididos em algumas fórmulas que são muito mais simples do que você imagina:</Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/MovimentacaoBasica.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Fórmulas</Text>
        <Text style={estilos.cardDescricao}>Aprenda as fórmulas básicas para resolver o cubo mágico.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>Se você já fez as fórmulas e quer dar um salto a mais em direção ao SpeedCube, confira tambem as fórmulas Extra Básico. Essas fórmulas irão ajudar você a resolver o cubo mais rápido, e improssionar seus amigos e familiares: </Text>


      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/ExtraBasico.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Extra Básico</Text>
        <Text style={estilos.cardDescricao}> Aprenda a movimentos além do básico para resolver o cubo mágico.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>Agora, se você já fez as fórmulas básicas e extra básicas, e quer ir além, confira o Método Avançado. Esse método, conhecido como CFOP, é utilizado pelos melhores cubers do mundo e irá te ajudar a resolver o cubo em menos de 10 segundos!</Text>

      <View style={estilos.footer}>
        <Text style={{ color: '#666' }}>© 2025 CuboTutorial. Todos os direitos reservados.</Text>
        <Text style={{ color: '#666' }}>Desenvolvido por Felipe Cagnin</Text>
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