import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ExtraAvancado() {

  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}>Fórmulas Extra Avançadas</Text>

      <Text style={estilos.texto}>
        Após dominar os métodos básicos e avançados de resolução, é comum os cubistas explorarem fórmulas extras para otimizar ainda mais seus tempos e movimentos.
      </Text>

      <Text style={estilos.texto}>
        Técnicas como VHLS, COLL e Winter Variation são usadas principalmente por quem deseja competir ou simplesmente resolver o cubo com mais eficiência e estilo. Elas permitem combinar passos e reduzir o número de movimentos.
      </Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/VHLS.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>VHLS</Text>
        <Text style={estilos.cardDescricao}>Combine a orientação da última camada com a resolução do slot frontal.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/COLL.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>COLL</Text>
        <Text style={estilos.cardDescricao}>Oriente e permute a última camada de cantos de uma vez só.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/WinterVariation.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Winter Variation</Text>
        <Text style={estilos.cardDescricao}>Finaliza o F2L e orienta a última camada sem afetar os cantos.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>
        Essas técnicas não são obrigatórias, mas podem levar sua resolução a um novo nível. Dominar essas fórmulas exige prática e compreensão de padrões mais sutis, mas o ganho em fluidez compensa!
      </Text>

      <View style={estilos.footer}>
        <Text style={{ color: '#666', textAlign: 'center' }}>© 2025 CuboTutorial. Todos os direitos reservados.</Text>
        <Text style={{ color: '#666', textAlign: 'center' }}>Desenvolvido por Felipe Cagnin</Text>
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
