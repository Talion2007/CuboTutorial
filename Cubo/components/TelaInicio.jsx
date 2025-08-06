import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicio() {

  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Image source={require('../assets/wallpaper_inicio.jpg')} style={estilos.imagemLogo} />
      <Text style={estilos.titulo}>Tudo sobre Cubo Mágico</Text>
      <Text style={estilos.texto}>Um portal completo para você aprender tudo sobre este incrível quebra-cabeça, do zero ao avançado. O Cubo Mágico é o brinquedo mais vendido do mundo e um dos quebra-cabeças mais intrigantes da história, com mais de 43 quintilhões de possibilidades e apenas uma solução. Descubra tudo aqui no CuboTutorial!</Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Estrutura')}>
        <Image source={require('../assets/Estrutura.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Estrutura do Cubo</Text>
        <Text style={estilos.cardDescricao}>Conheça as peças e a anatomia do cubo mágico.</Text>
      </TouchableOpacity>

      {/* Card para a tela "Movimentação" */}
      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Movimentacao')}>
        <Image source={require('../assets/Movimentacao.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Movimentação</Text>
        <Text style={estilos.cardDescricao}>Aprenda os movimentos básicos e avançados do cubo.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('MetodoBasico')}>
        <Image source={require('../assets/MetodoBasico.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Método Básico</Text>
        <Text style={estilos.cardDescricao}>O primeiro passo para resolver o cubo mágico.</Text>
      </TouchableOpacity>

      <View style={estilos.footer}>
        <Text style={{ color: '#666' }}>© 2025 CuboTutorial. Todos os direitos reservados.</Text>
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
    marginBottom: 20,
  },

  texto: {
    fontSize: 17,
    marginBottom: 20,
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