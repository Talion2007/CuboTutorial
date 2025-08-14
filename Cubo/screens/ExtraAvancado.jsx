import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function ExtraAvancado() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.SafeArea}>

    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}>Fórmulas Extra Avançadas</Text>

      <Text style={estilos.texto}>
        Após dominar os métodos básicos e avançados de resolução, é comum os cubistas explorarem fórmulas extras para otimizar ainda mais seus tempos e movimentos.
      </Text>

      <Text style={estilos.texto}>
        Técnicas como VHLS, COLL e Winter Variation são usadas principalmente por quem deseja competir ou simplesmente resolver o cubo com mais eficiência e estilo. Elas permitem combinar passos e reduzir o número de movimentos.
      </Text>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/Capas/VHLS.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>VHLS</Text>
        <Text style={estilos.cardDescricao}>Combine a orientação da última camada com a resolução do slot frontal.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/Capas/COLL.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>COLL</Text>
        <Text style={estilos.cardDescricao}>Oriente e permute a última camada de cantos de uma vez só.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/Capas/WinterVariation.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>Winter Variation</Text>
        <Text style={estilos.cardDescricao}>Finaliza o F2L e orienta a última camada sem afetar os cantos.</Text>
      </TouchableOpacity>

      <Text style={estilos.texto}>
        Essas técnicas não são obrigatórias, mas podem levar sua resolução a um novo nível. Dominar essas fórmulas exige prática e compreensão de padrões mais sutis, mas o ganho em fluidez compensa!
      </Text>

      <Footer/>
    </ScrollView>
    </SafeAreaView>
  );
}