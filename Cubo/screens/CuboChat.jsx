import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useRef, useCallback } from 'react';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function CuboChat() {

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
                <Text style={estilos.titulo}>CuboChats</Text>

                <Text style={estilos.texto}>
                    Aqui você pode interagir com dois tipos diferentes de chat, cada um com sua função e forma de resposta.
                </Text>

                <Text style={estilos.texto}>
                    O ChatBot Local utiliza respostas pré-definidas que foram criadas especialmente para explicar
                    o funcionamento do aplicativo e guiar você nas funções disponíveis.
                </Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('CuboChats', { screen: 'ChatBot' })}>
                    <Image source={require('../assets/Capas/Cubo.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>ChatBot Local</Text>
                    <Text style={estilos.cardDescricao}>
                        Converse com um chat que responde sobre este aplicativo, usando respostas definidas.
                    </Text>
                </TouchableOpacity>

                <Text style={estilos.texto}>
                    Já o ChatBot Online está conectado à API do Gemini, podendo responder sobre o cubo mágico
                    e também sobre outros assuntos, com respostas geradas em tempo real pela inteligência artificial.
                </Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('CuboChats', { screen: 'Gemini' })}>
                    <Image source={require('../assets/Capas/Exemplo.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>ChatBot Online</Text>
                    <Text style={estilos.cardDescricao}>
                        Converse com a IA do Gemini para tirar dúvidas sobre o cubo mágico ou qualquer outro tema.
                    </Text>
                </TouchableOpacity>

                <Text style={estilos.texto}>
                    Escolha o chat que melhor se encaixa na sua necessidade e aproveite para explorar e aprender mais!
                </Text>

                <Text style={estilos.textoVeja}>Veja também:</Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método 2x2', { screen: 'Metodo2x2' })}>
                    <Image source={require('../assets/Capas/Metodo2x2.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Método 2x2</Text>
                    <Text style={estilos.cardDescricao}>Aprenda do básico ao avançado para o cubo 2x2.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Estrutura do Cubo', { screen: 'Estrutura' })}>
                    <Image source={require('../assets/Capas/Pecas.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Estrutura do Cubo</Text>
                    <Text style={estilos.cardDescricao}>Conheça as peças e a anatomia do cubo mágico.</Text>
                </TouchableOpacity>

                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}
