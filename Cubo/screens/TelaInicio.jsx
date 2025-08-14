import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function TelaInicio() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
        <Image source={require('../assets/wallpaper_inicio.jpg')} style={estilos.imagemLogo} />
        <Text style={estilos.titulo}>Tudo sobre Cubo Mágico</Text>
        <Text style={estilos.texto}>Um portal completo para você aprender tudo sobre este incrível quebra-cabeça, do zero ao avançado. O Cubo Mágico é o brinquedo mais vendido do mundo e um dos quebra-cabeças mais intrigantes da história, com mais de 43 quintilhões de possibilidades e apenas uma solução. Descubra tudo aqui no CuboTutorial!</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Estrutura')}>
          <Image source={require('../assets/Capas/Pecas.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Estrutura do Cubo</Text>
          <Text style={estilos.cardDescricao}>Conheça as peças e a anatomia do cubo mágico.</Text>
        </TouchableOpacity>

        {/* Card para a tela "Movimentação" */}
        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Movimentacao')}>
          <Image source={require('../assets/Capas/MovimentacaoBasica.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Movimentação</Text>
          <Text style={estilos.cardDescricao}>Aprenda os movimentos básicos e avançados do cubo.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('MetodoBasico')}>
          <Image source={require('../assets/Capas/MetodoBasico.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Método Básico</Text>
          <Text style={estilos.cardDescricao}>O primeiro passo para resolver o cubo mágico.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>Explore também nossos outros métodos avançados e dicas para se tornar um expert no Cubo Mágico!</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('MetodoAvancado')}>
          <Image source={require('../assets/Capas/MetodoAvancado.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Método Avançado</Text>
          <Text style={estilos.cardDescricao}>Conheça o método avançado para resolver o cubo.</Text>
        </TouchableOpacity>

        {/* Card para a tela "Movimentação" */}
        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('ExtraAvancado')}>
          <Image source={require('../assets/Capas/ExtraAvancado.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Extra Avançado</Text>
          <Text style={estilos.cardDescricao}>Aprenda fórmulas extras para se melhorar seus tempos.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Metodo2x2')}>
          <Image source={require('../assets/Capas/Metodo2x2.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Método 2x2</Text>
          <Text style={estilos.cardDescricao}>Aprenda do básico ao avançado para o cubo 2x2.</Text>
        </TouchableOpacity>

        <Footer />

      </ScrollView>
    </SafeAreaView>
  );
}