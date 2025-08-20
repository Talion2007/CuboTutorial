import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useRef, useCallback } from 'react';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function Estrutura() {

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

      <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado} ref={scrollRef}>
        <Text style={estilos.titulo}>Estrutura do Cubo</Text>

        <Text style={estilos.texto}>
          Antes de aprender os métodos de resolução, é fundamental conhecer a estrutura do cubo mágico. Saber como ele é formado e como suas peças se movem ajudará você a entender melhor cada passo da montagem.
        </Text>

        <Text style={estilos.texto}>
          Entender isso evita frustrações comuns de iniciantes, como tentar resolver o cubo de forma errada ou acreditar que há algo errado quando, na verdade, é só uma má compreensão da estrutura.
        </Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Estrutura do Cubo', { screen: 'Pecas' })}>
          <Image source={require('../assets/Capas/Pecas.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Peças do Cubo</Text>
          <Text style={estilos.cardDescricao}>Aprenda as peças que compõem o cubo mágico.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>
          Além disso, existem alguns "casos impossíveis" que impedem a resolução do cubo. Esses casos não acontecem naturalmente — normalmente são resultado de desmontagem incorreta ou troca de adesivos.
        </Text>

        <Text style={estilos.texto}>
          Conhecer esses casos pode te salvar de horas tentando resolver um cubo que, na verdade, está em uma configuração inválida!
        </Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Estrutura do Cubo', { screen: 'CasosImpossiveis' })}>
          <Image source={require('../assets/Capas/CasosImpossiveis.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Casos Impossíveis</Text>
          <Text style={estilos.cardDescricao}>Aprenda a identificar casos impossíveis no cubo mágico.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>Se você já está familiarizado com a estrutura, confira a seção de movimentação, muito importante para a resolução do Cubo Mágico.</Text>

        <Text style={estilos.textoVeja}>Veja também:</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('CuboChats', { screen: 'CuboChatPage' })}>
          <Image source={require('../assets/Capas/Cubo.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>CuboChats</Text>
          <Text style={estilos.cardDescricao}>Aprenda com o CuboChat para resolver o cubo mágico.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Movimentação', { screen: 'Movimentacao' })}>
          <Image source={require('../assets/Capas/MovimentacaoBasica.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Movimentação</Text>
          <Text style={estilos.cardDescricao}>Aprenda os movimentos básicos e avançados do cubo.</Text>
        </TouchableOpacity>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}