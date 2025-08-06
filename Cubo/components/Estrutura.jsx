import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Estrutura() {

  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}>Estrutura do Cubo</Text>

      <Text style={estilos.texto}>
        Antes de aprender os métodos de resolução, é fundamental conhecer a estrutura do cubo mágico. Saber como ele é formado e como suas peças se movem ajudará você a entender melhor cada passo da montagem.
      </Text>

      <Text style={estilos.texto}>
        Entender isso evita frustrações comuns de iniciantes, como tentar resolver o cubo de forma errada ou acreditar que há algo errado quando, na verdade, é só uma má compreensão da estrutura.
      </Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/MovimentacaoBasica.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Peças do Cubo</Text>
        <Text style={estilos.cardDescricao}>Aprenda as peças que compõem o cubo mágico.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>
        Além disso, existem alguns "casos impossíveis" que impedem a resolução do cubo. Esses casos não acontecem naturalmente — normalmente são resultado de desmontagem incorreta ou troca de adesivos.
      </Text>

      <Text style={estilos.texto}>
        Conhecer esses casos pode te salvar de horas tentando resolver um cubo que, na verdade, está em uma configuração inválida!
      </Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/MovimentacaoAvancada.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Casos Impossíveis</Text>
        <Text style={estilos.cardDescricao}>Aprenda a identificar casos impossíveis no cubo mágico.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>Se você já está familiarizado com a estrutura, confira a seção de movimentação, muito importante para a resolução do Cubo Mágico.</Text>

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
