import 'react-native-gesture-handler';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Text, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function TelaInicio() {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const carrosselRef = useRef(null);
  const [indice, setIndice] = useState(0);

  const imagensCarrossel = [
    require('../assets/Carrossel/WallpaperLogo.png'),
    require('../assets/Carrossel/Carrossel01.jpg'),
    require('../assets/Carrossel/Carrossel02.jpg'),
    require('../assets/Carrossel/Carrossel03.jpg'),
    require('../assets/Carrossel/Carrossel04.jpg'),
    require('../assets/Carrossel/Carrossel05.jpg'),
  ];

  const larguraTela = Dimensions.get('window').width;

  // Volta ao topo quando a tela ganha foco
  useFocusEffect(
    useCallback(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ y: 0, animated: true });
      }
    }, [])
  );

  // Troca automática das imagens
  useEffect(() => {
    const interval = setInterval(() => {
      const proximoIndice = (indice + 1) % imagensCarrossel.length;
      setIndice(proximoIndice);
      carrosselRef.current.scrollToIndex({ index: proximoIndice, animated: true });
    }, 5000); // muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [indice]);

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <ScrollView
        ref={scrollRef}
        style={estilos.conteudoScroll}
        contentContainerStyle={estilos.conteudoCentralizado}
      >
        {/* Carrossel */}
        <FlatList
          ref={carrosselRef}
          data={imagensCarrossel}
          keyExtractor={(_, index) => index.toString()}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false} // ❌ desativa arrasto manual
          renderItem={({ item }) => (
            <Image source={item} style={style.imagemCarrossel} />
          )}
          style={style.containerImagem}
        />

        {/* Conteúdo restante */}
        <Text style={estilos.titulo}>Tudo sobre Cubo Mágico</Text>
        <Text style={estilos.texto}>
          Um portal completo para você aprender tudo sobre este incrível quebra-cabeça, do zero ao avançado. O Cubo Mágico é o brinquedo mais vendido do mundo e um dos quebra-cabeças mais intrigantes da história, com mais de 43 quintilhões de possibilidades e apenas uma solução. Descubra tudo aqui no CuboTutorial!
        </Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Estrutura do Cubo', { screen: 'Estrutura' })}>
          <Image source={require('../assets/Capas/Pecas.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Estrutura do Cubo</Text>
          <Text style={estilos.cardDescricao}>Conheça as peças e a anatomia do cubo mágico.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Movimentação', { screen: 'Movimentacao' })}>
          <Image source={require('../assets/Capas/MovimentacaoBasica.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Movimentação</Text>
          <Text style={estilos.cardDescricao}>Aprenda os movimentos básicos e avançados do cubo.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'MetodoBasico' })}>
          <Image source={require('../assets/Capas/MetodoBasico.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Método Básico</Text>
          <Text style={estilos.cardDescricao}>O primeiro passo para resolver o cubo mágico.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>Explore também nossos outros métodos avançados e dicas para se tornar um expert no Cubo Mágico!</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Avançado', { screen: 'MetodoAvancado' })}>
          <Image source={require('../assets/Capas/MetodoAvancado.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Método Avançado</Text>
          <Text style={estilos.cardDescricao}>Conheça o método avançado para resolver o cubo.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Extra Avançado', { screen: 'ExtraAvancado' })}>
          <Image source={require('../assets/Capas/ExtraAvancado.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Extra Avançado</Text>
          <Text style={estilos.cardDescricao}>Aprenda fórmulas extras para se melhorar seus tempos.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método 2x2', { screen: 'Metodo2x2' })}>
          <Image source={require('../assets/Capas/Metodo2x2.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>Método 2x2</Text>
          <Text style={estilos.cardDescricao}>Aprenda do básico ao avançado para o cubo 2x2.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>Explore também nossos CuboChats para tirar dúvidas!</Text>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('CuboChats', { screen: 'CuboChatPage' })}>
          <Image source={require('../assets/Capas/Cubo.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>CuboChats</Text>
          <Text style={estilos.cardDescricao}>Aprenda com o CuboChat para resolver o cubo mágico.</Text>
        </TouchableOpacity>

        <Text style={estilos.texto}>Agradecemos a sua visita e esperamos que aproveite ao máximo o nosso conteúdo!</Text>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  imagemCarrossel: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', // ou 'contain'
    borderRadius: 10,
  },
  containerImagem: {
    width: Dimensions.get('window').width * 0.90,
    height: 200,
  },
});
