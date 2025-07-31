import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MetodoAvancado() {

  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}> Método Avançado</Text>
      <Text style={estilos.texto}> Aqui você pode encontrar informações sobre o método avançado de resolução do cubo mágico.</Text>

      {/* Card para a tela "Movimentação" */}
      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('')}>
        <Image source={require('../assets/F2L.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>F2L - 2 Camadas</Text>
        <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as First Two Layers.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('')}>
        <Image source={require('../assets/OLL.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}> OLL - Orientação</Text>
        <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as  OrientationLast Layers.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('')}>
        <Image source={require('../assets/PLL.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>PLL  - Permutação</Text>
        <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as Permutation Last Layers.</Text>
      </TouchableOpacity>

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