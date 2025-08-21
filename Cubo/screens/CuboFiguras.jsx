// import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function CuboFiguras() {

    const navigation = useNavigation();
    const scrollRef = useRef(null);

    // Volta ao topo sempre que a tela ganha foco
    useFocusEffect(
        useCallback(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTo({ y: 0, animated: true });
            }
        }, [])
    );

    return (
        <SafeAreaView style={estilos.SafeArea}>
            <ScrollView
                style={estilos.conteudoScroll}
                contentContainerStyle={estilos.conteudoCentralizado}
                ref={scrollRef}
            >

                <Text style={estilos.titulo}>Cubo de Figuras</Text>
                <Text style={estilos.texto}>
                    Depois que você já aprendeu a resolver um cubo tradicional, resolver
                    um modelo com imagens ou fotos pode parecer algo simples, porém existem
                    algumas regras extras que precisam ser aplicadas.
                </Text>

                <Text style={estilos.texto}>
                    Nos cubos de figuras, seguimos o centro que representa a continuação da
                    mesma imagem. Mas, diferente do cubo de 6 cores, aqui você também precisa
                    solucionar o sentido dos centros, já que eles podem rotacionar em seus
                    próprios eixos.
                </Text>

                {/* Caso 01 */}
                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/CuboFiguras/Caso01.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>R U R' U (5x)</Text>
                    <Text style={estilos.cardDescricao}>
                        Neste caso apenas o centro do topo fará a rotação de 180º.
                    </Text>
                </View>

                {/* Caso 02 */}
                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/CuboFiguras/Caso02.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>M' U M U' (5x)</Text>
                    <Text style={estilos.cardDescricao}>
                        A face fará a rotação horária e o topo no sentido anti-horário.
                    </Text>
                </View>

                {/* Caso 03 */}
                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/CuboFiguras/Caso03.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>M' U' M U (x5)</Text>
                    <Text style={estilos.cardDescricao}>
                        A face fará a rotação anti-horária e o topo no sentido horário.
                    </Text>
                </View>

                <Text style={estilos.texto}>
                    Esses são os casos mais comuns que você encontrará ao resolver cubos de figuras.
                    Lembre-se de praticar cada um deles até se sentir confortável para aplicá-los em
                    diferentes situações. A prática constante é a chave para se tornar um expert em cubos de figuras!
                </Text>

                <Text style={estilos.textoVeja}>Veja também:</Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'ExtraBasico' })}>
                    <Image source={require('../assets/Capas/ExtraBasico.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Extra Básico</Text>
                    <Text style={estilos.cardDescricao}> Aprenda a movimentos além do básico para resolver o cubo mágico.</Text>
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
