import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useRef, useCallback } from 'react';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function MetodoBasico() {

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
        <Text style={estilos.titulo}> Método Básico</Text>
        <Text style={estilos.texto}>O cubo Mágico é um dos quebra-cabeças mais incríveis do mundo. Todo colorido e tridimensional, que pode ser misturado em 43 quintilhões de posições diferentes sendo apenas 1 a correta. Um desafio que intrigou diversas gerações e até hoje é considerado o brinquedo mais vendido do mundo.</Text>
        <Text style={estilos.texto}>Agora você pode estar pensando que, com tantas (ou praticamente infinitas) possibilidades, resolver um Cubo Mágico deve ser uma tarefa praticamente impossível. E você está quase certo. Apenas "resolver um cubo" na tentativa e erro de fato é algo completamente improvável, por isso é muito importante que você aprenda a técnica de solução. </Text>
        <Text style={estilos.texto}>Resolver o Cubo Mágico nada mais é do que seguir uma receita. São 8 passos divididos em algumas fórmulas que são muito mais simples do que você imagina:</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'FormulasBasicas' })}>
          <Image source={require('../assets/Capas/MetodoBasico.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Fórmulas</Text>
          <Text style={estilos.cardDescricao}>Aprenda as fórmulas básicas para resolver o cubo mágico.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>Se você já fez as fórmulas e quer dar um salto a mais em direção ao SpeedCube, confira tambem as fórmulas Extra Básico. Essas fórmulas irão ajudar você a resolver o cubo mais rápido, e improssionar seus amigos e familiares: </Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'ExtraBasico' })}>
          <Image source={require('../assets/Capas/ExtraBasico.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Extra Básico</Text>
          <Text style={estilos.cardDescricao}> Aprenda a movimentos além do básico para resolver o cubo mágico.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>Agora, se você já fez as fórmulas básicas e extra básicas, e quer ir além, confira o Método Avançado. Esse método, conhecido como CFOP, é utilizado pelos melhores cubers do mundo e irá te ajudar a resolver o cubo em menos de 10 segundos!</Text>

        <Text style={estilos.textoVeja}>Veja também:</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Movimentação', { screen: 'Movimentacao' })}>
          <Image source={require('../assets/Capas/MovimentacaoBasica.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Movimentação</Text>
          <Text style={estilos.cardDescricao}>Aprenda os movimentos básicos e avançados do cubo.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
          <Image source={require('../assets/Capas/Cruz.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Cross - Treino de Cruz</Text>
          <Text style={estilos.cardDescricao}>Aqui você pode encontrar informações sobre treino de Cruz.</Text>
        </TouchableOpacity>

        <Footer />

      </ScrollView>
    </SafeAreaView>
  );
}