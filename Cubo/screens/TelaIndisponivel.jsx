import 'react-native-gesture-handler';
import { Text, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import estilos from "../styles/estilos";
import Footer from '../components/Footer';

export default function TelaIndisponivel() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
        <Image source={require('../assets/indisponivel.jpg')} style={estilos.imagemLogo} />
        <Text style={estilos.titulo}>Página em Construção</Text>
        <Text style={estilos.texto}>Essa página ainda está em desenvolvimento, logo mais haverá novidades! </Text>
        <Text style={estilos.texto}>Não deixe de conferir outros conteúdos! </Text>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}