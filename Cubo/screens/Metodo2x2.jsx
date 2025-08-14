import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function Metodo2x2() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
        <Text style={estilos.titulo}>Método Cubo 2x2</Text>
        <Text style={estilos.texto}>
          Resolver o cubo 2x2 rápido depende de prática e técnica. Os métodos mais usados incluem o Básico, Ortega e Guimond, cada um com suas estratégias para finalizar o cubo rapidamente.
        </Text>

        {/* Cards com métodos */}
        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
          <Image source={require('../assets/Capas/Metodo2x2.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Método Básico 2x2</Text>
          <Text style={estilos.cardDescricao}>Aprenda a resolver o cubo 2x2 camada por camada de forma simples e direta.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
          <Image source={require('../assets/Capas/Ortega.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Ortega</Text>
          <Text style={estilos.cardDescricao}>Um método avançado para resolver o cubo em 6 a 10 movimentos finais, focado em eficiência.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
          <Image source={require('../assets/Capas/Guimond.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Guimond</Text>
          <Text style={estilos.cardDescricao}>Método rápido de finalização, ideal para quem quer resolver o cubo 2x2 em menos de 10 segundos.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>
          Cada método tem sua ordem de movimentos, mas todos têm como objetivo deixar a solução do cubo 2x2 mais rápida e intuitiva.
        </Text>
        <Text style={estilos.texto}>
          A prática diária ajuda a memorizar as fórmulas e a executar os movimentos com precisão, aumentando sua velocidade.
        </Text>
        <Text style={estilos.texto}>
          Antes de estudar métodos avançados como Ortega ou Guimond, é importante estar confortável com o método básico e conseguir resolver o cubo sem pensar demais nos movimentos.
        </Text>

        <Text style={estilos.texto}>Sugestão de estudo:</Text>

        <Text style={estilos.texto}>1 - Comece resolvendo o cubo 2x2 camada por camada usando o método básico. Faça isso até se sentir confiante e rápido.</Text>
        <Text style={estilos.texto}>2 - Depois, pratique o método Ortega. Aprenda a reconhecer rapidamente os casos e execute os movimentos com fluidez.</Text>
        <Text style={estilos.texto}>3 - Quando estiver confortável com Ortega, experimente o método Guimond, que é mais avançado e permite resolver o cubo ainda mais rápido.</Text>
        <Text style={estilos.texto}>4 - Faça treinos curtos, mas frequentes. Velocidade vem com prática consistente e memorização das fórmulas.</Text>
        <Text style={estilos.texto}>5 - Sempre revise os métodos anteriores. Mesmo após aprender métodos avançados, o básico continua sendo útil para situações inesperadas.</Text>

        <Footer />

      </ScrollView>
    </SafeAreaView>
  );
}
