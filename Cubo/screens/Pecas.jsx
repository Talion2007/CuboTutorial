import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function PecasCubo3x3() {

  const navigation = useNavigation();
  const scrollRef = useRef(null);

  // Quando a tela ganha foco, volta ao topo
  useFocusEffect(
    useCallback(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 0, animated: true });
      }
    }, [])
  );

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado} ref={scrollRef} >
        <Text style={estilos.titulo}>Peças do Cubo</Text>
        <Text style={estilos.texto}>
          Conhecer as peças do cubo 3x3 é essencial para aprender a resolver de forma eficiente. O cubo é composto por três tipos de peças: Centros, Meios e Quinas.
        </Text>

        {/* Cards com tipos de peças */}
        <View style={estilos.cardNeutro}>
          <Image source={require('../assets/Pecas/Centros.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Peças de Centro</Text>
          <Text style={estilos.cardDescricao}>Cada face do cubo tem uma peça central fixa que define a cor daquela face. No 3x3, os centros não se movem entre si.</Text>
        </View>

        <View style={estilos.cardNeutro}>
          <Image source={require('../assets/Pecas/Meios.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Peças de Meio</Text>
          <Text style={estilos.cardDescricao}>Os Meios possuem 2 cores e se movem entre posições diferentes ao girar o cubo. São essenciais para formar cruzes e camadas.</Text>
        </View>

        <View style={estilos.cardNeutro}>
          <Image source={require('../assets/Pecas/Quinas.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Peças de Quina</Text>
          <Text style={estilos.cardDescricao}>As Quinas têm 3 cores e sua posição e orientação correta são fundamentais para finalizar o cubo.</Text>
        </View>

        <Text style={estilos.texto}>
          No cubo 3x3, existem 6 peças centrais, 12 meios e 8 quinas. Saber identificar cada peça e observar como elas se movem ajuda a aplicar métodos básicos e avançados de forma rápida.
        </Text>

        <Text style={estilos.texto}>Dicas de estudo:</Text>
        <Text style={estilos.texto}>1 - Memorize a posição das cores dos centros e como elas determinam cada face.</Text>
        <Text style={estilos.texto}>2 - Observe como os meios se movem em cada rotação para formar cruzes e completar camadas.</Text>
        <Text style={estilos.texto}>3 - Pratique identificar rapidamente as quinas e aprender suas combinações de cores.</Text>
        <Text style={estilos.texto}>4 - Use a prática constante para melhorar a velocidade de reconhecimento e execução dos movimentos.</Text>

        <Text style={estilos.textoVeja}>Veja também:</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('ChatBot Local')}>
          <Image source={require('../assets/Capas/Cubo.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>ChatBot Local</Text>
          <Text style={estilos.cardDescricao}>
            Converse com um chat que responde sobre este aplicativo, usando respostas definidas.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('CasosImpossiveis')}>
          <Image source={require('../assets/Capas/CasosImpossiveis.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Casos Impossíveis</Text>
          <Text style={estilos.cardDescricao}>Aprenda a identificar casos impossíveis no cubo mágico.</Text>
        </TouchableOpacity>

        <Footer />

      </ScrollView>
    </SafeAreaView>
  );
}
