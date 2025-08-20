import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRef, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function MovimentosBasicos() {

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

    // Lista de movimentos básicos
    const movimentos = [
        { letra: 'R - right', descricao: 'Direita horário', imagem: require('../assets/MovimentacaoBasica/MovimentoR.png') },
        { letra: "R - right'", descricao: 'Direita anti-horário', imagem: require('../assets/MovimentacaoBasica/MovimentoRLinha.png') },
        { letra: 'R2 - right double', descricao: 'Direita duplo', imagem: require('../assets/MovimentacaoBasica/MovimentoR2.png') },
        { letra: 'L - left', descricao: 'Esquerda horário', imagem: require('../assets/MovimentacaoBasica/MovimentoL.png') },
        { letra: "L - left'", descricao: 'Esquerda anti-horário', imagem: require('../assets/MovimentacaoBasica/MovimentoLLinha.png') },
        { letra: 'L2 - left double', descricao: 'Esquerda duplo', imagem: require('../assets/MovimentacaoBasica/MovimentoL2.png') },
        { letra: 'U - up', descricao: 'Topo horário', imagem: require('../assets/MovimentacaoBasica/MovimentoU.png') },
        { letra: 'D - down', descricao: 'Base horário', imagem: require('../assets/MovimentacaoBasica/MovimentoD.png') },
        { letra: 'F - front', descricao: 'Frente horário', imagem: require('../assets/MovimentacaoBasica/MovimentoF.png') },
        { letra: 'B - back', descricao: 'Trás horário', imagem: require('../assets/MovimentacaoBasica/MovimentoB.png') },
    ];


    return (
        <SafeAreaView style={estilos.SafeArea}>
            <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado} ref={scrollRef} >

                <Text style={estilos.titulo}>Movimentos Básicos</Text>
                <Text style={estilos.texto}>
                    Cada lado do cubo é representado por uma letra. Sozinha significa movimento horário, com apóstrofo é anti-horário e com 2 é duplo.
                    Sempre olhe para o lado que irá girar e siga o movimento como um relógio com o dedo.
                </Text>

                {/* Cards de movimentos */}
                {movimentos.map((movimento, index) => (
                    <View key={index} style={estilos.cardNeutro}>
                        <Image source={movimento.imagem} style={estilos.imagemCard} />
                        <Text style={estilos.cardTitulo}>{movimento.letra}</Text>
                        <Text style={estilos.cardDescricao}>{movimento.descricao}</Text>
                    </View>
                ))}

                <Text style={estilos.texto}>
                    Estes movimentos são a base para qualquer solução de cubo mágico. Pratique-os até se sentir confortável antes de avançar para movimentos mais complexos.
                </Text>

                <Text style={estilos.textoVeja}>Veja também:</Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Estrutura do Cubo', { screen: 'CasosImpossiveis' })}>
                    <Image source={require('../assets/Capas/CasosImpossiveis.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Casos Impossíveis</Text>
                    <Text style={estilos.cardDescricao}>Aprenda a identificar casos impossíveis no cubo mágico.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
                    <Image source={require('../assets/Capas/MovimentacaoAvancada.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Movimentação Avançada</Text>
                    <Text style={estilos.cardDescricao}>Aprenda as movimentações avançadas do cubo mágico.</Text>
                </TouchableOpacity>

                <Footer />

            </ScrollView>
        </SafeAreaView>
    );
}
