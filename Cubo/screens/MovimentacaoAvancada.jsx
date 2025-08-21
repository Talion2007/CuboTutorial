import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function MovimentacaoAvancada() {

    const navigation = useNavigation();
    const scrollRef = useRef(null);

    // Volta ao topo quando a tela ganha foco
    useFocusEffect(
        useCallback(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTo({ y: 0, animated: true });
            }
        }, [])
    );

    // Lista de movimentos avançados
    const movimentosAvancados = [
        { letra: "Uw' - top two layers'", descricao: 'Duas camadas do topo no sentido anti-horário', imagem: require('../assets/MovimentacaoAvancada/MovimentoUwLinha.png') },
        { letra: "Fw - front two layers", descricao: 'Duas camadas da frente no sentido horário', imagem: require('../assets/MovimentacaoAvancada/MovimentoFw.png') },
        { letra: "Lw' - left two layers'", descricao: 'Duas camadas da esquerda no sentido anti-horário', imagem: require('../assets/MovimentacaoAvancada/MovimentoLwLinha.png') },

        { letra: "M - middle layer", descricao: 'Camada do meio no mesmo sentido do L', imagem: require('../assets/MovimentacaoAvancada/MovimentoM.png') },
        { letra: "S - standing layer", descricao: 'Camada do meio no mesmo sentido do F', imagem: require('../assets/MovimentacaoAvancada/MovimentoS.png') },

        { letra: "X - whole cube (R axis)", descricao: 'Cubo todo no mesmo sentido do R', imagem: require('../assets/MovimentacaoAvancada/MovimentoX.png') },
        { letra: "Y - whole cube (U axis)", descricao: 'Cubo todo no mesmo sentido do U', imagem: require('../assets/MovimentacaoAvancada/MovimentoY.png') },
        { letra: "Z - whole cube (F axis)", descricao: 'Cubo todo no mesmo sentido do F', imagem: require('../assets/MovimentacaoAvancada/MovimentoZ.png') },
    ];
    return (
        <SafeAreaView style={estilos.SafeArea}>
            <ScrollView
                style={estilos.conteudoScroll}
                contentContainerStyle={estilos.conteudoCentralizado}
                ref={scrollRef}
            >

                <Text style={estilos.titulo}>Movimentos Avançados</Text>

                <Text style={estilos.texto}>
                    Para o método avançado e outras fórmulas complementares nós iremos continuar utilizando os movimentos básicos que você já aprendeu,
                    porém agora também com algumas variações, girando duas camadas ao mesmo tempo, as camadas do meio e até mesmo o cubo todo mudando seus eixos de posição.
                </Text>

                <Text style={estilos.texto}>
                    Uma das variações mais comuns é quando um movimento tradicional é acompanhado da letra "w"; nesse caso você deve girar o lado segurando duas camadas.
                    Além disso, temos o movimento M (meio), e os movimentos X, Y e Z que rotacionam o cubo inteiro.
                </Text>

                {/* Cards de movimentos avançados */}
                {movimentosAvancados.map((movimento, index) => (
                    <View key={index} style={estilos.cardNeutro}>
                        <Image source={movimento.imagem} style={estilos.imagemCard} />
                        <Text style={estilos.cardTitulo}>{movimento.letra}</Text>
                        <Text style={estilos.cardDescricao}>{movimento.descricao}</Text>
                    </View>
                ))}

                <Text style={estilos.texto}>
                    Esses movimentos complementam sua base no cubo mágico e são fundamentais para algoritmos avançados.
                    Treine-os com calma antes de aplicar em resoluções completas.
                </Text>

                <Text style={estilos.textoVeja}>Veja também:</Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Movimentação', { screen: 'MovimentosBasicos' })}>
                    <Image source={require('../assets/Capas/MovimentacaoBasica.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Movimentos Básicos</Text>
                    <Text style={estilos.cardDescricao}>Reveja os movimentos essenciais para dominar o cubo.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'FormulasBasicas' })}>
                    <Image source={require('../assets/Capas/MetodoBasico.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Fórmulas</Text>
                    <Text style={estilos.cardDescricao}>Aprenda as fórmulas básicas para resolver o cubo mágico.</Text>
                </TouchableOpacity>

                <Footer />

            </ScrollView>
        </SafeAreaView>
    );
}
