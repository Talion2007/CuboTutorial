import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function TelaIndisponivel() {

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
        <Image source={require('../assets/indisponivel.jpg')} style={estilos.imagemLogo} />
        <Text style={estilos.titulo}>Página em Construção</Text>
        <Text style={estilos.texto}>Essa página ainda está em desenvolvimento, logo mais haverá novidades! </Text>
        <Text style={estilos.texto}>Não deixe de conferir outros conteúdos! </Text>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}