import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function Movimentacao() {

  const navigation = useNavigation();

  return (
        <SafeAreaView style={estilos.SafeArea}>
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}>Movimentação do Cubo</Text>

      <Text style={estilos.texto}>
        A movimentação do cubo mágico é padronizada e segue uma notação internacional com letras que representam cada face. É essencial entender como essas rotações funcionam, pois toda resolução depende da execução correta dos movimentos.
      </Text>

      <Text style={estilos.texto}>
        Comece aprendendo os movimentos básicos e a notação utilizada. Isso inclui movimentos como R, L, U, D, F e B, que representam as rotações das faces direita, esquerda, superior, inferior, frontal e traseira, respectivamente.
      </Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/Capas/MovimentacaoBasica.png')} style={estilos.imagemCard} />
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
        <Image source={require('../assets/Capas/MovimentacaoAvancada.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Movimentação Avançada</Text>
        <Text style={estilos.cardDescricao}>Aprenda as movimentações avançadas do cubo mágico.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>
        Se você já está familiarizado com a movimentação básica e avançada, confira o Método Básico, onde você encontrará fórmulas e técnicas para resolver o cubo mágico de forma eficiente e fácil.
      </Text>

      <Footer/>

    </ScrollView>
</SafeAreaView>
  );
}