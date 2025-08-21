import 'react-native-gesture-handler';
import React, { useRef, useCallback } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';
import { cards, secoes } from '../components/Arrays'; // Assuming you have a data file for formulas

export default function FormulasBasicas() {
    const navigation = useNavigation();
    const scrollRef = useRef(null);
    const anchors = useRef({});

    useFocusEffect(
        useCallback(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollTo({ y: 0, animated: false });
            }
        }, [])
    );

    const onSectionLayout = (key) => (e) => {
        anchors.current[key] = e.nativeEvent.layout.y;
    };

    const goTo = (key) => {
        const y = anchors.current[key] ?? 0;
        scrollRef.current?.scrollTo({ y: Math.max(0, y - 12), animated: true });
    };

    return (
        <SafeAreaView style={estilos.SafeArea}>
            <ScrollView
                ref={scrollRef}
                style={estilos.conteudoScroll}
                contentContainerStyle={[estilos.conteudoCentralizado]}
            >
                <Text style={estilos.titulo}>Fórmulas Básicas</Text>
                <Text style={estilos.texto}>
                    O próximo passo, depois de já ter aprendido a montar o cubo com o método básico, é
                    estudar exatamente o mesmo método, agora usando fórmulas. Se você ainda não aprendeu a
                    resolver o cubo, recomendo fortemente começar pelo método básico em vídeo. Antes de seguir,
                    aprenda o significado das letras na página de Movimentos Básicos.
                </Text>

                {cards.map((c) => (
                    <TouchableOpacity key={c.key} style={estilos.card} onPress={() => goTo(c.key)}>
                        <Image source={c.imagem} style={estilos.imagemCard} accessibilityLabel={c.titulo} />
                        <Text style={estilos.cardTitulo}>{c.titulo}</Text>
                        <Text style={estilos.cardDescricao}>{c.descricao}</Text>
                    </TouchableOpacity>
                ))}

                {secoes.map((sec) => (
                    <>
                        <Text style={estilos.subTitulo} key={sec.key} onLayout={onSectionLayout(sec.key)}>
                            {sec.titulo}
                        </Text>
                        <Text style={estilos.texto}>{sec.intro}</Text>
                        {sec.casos.map((c, i) => (
                            <View key={`${sec.key}-caso-${i}`} style={estilos.cardNeutro}>
                                <Image source={c.imagem} style={[estilos.imagemCard]} accessibilityLabel={`${sec.titulo} — Caso ${i + 1}`} />
                                <Text style={estilos.cardTitulo}>{c.formula}</Text>
                                <Text style={estilos.cardDescricao}>{c.texto}</Text>
                            </View>
                        ))}
                    </>
                ))}

                <Text style={estilos.subTitulo}>Dicas: </Text>
                <Text style={estilos.texto}>
                    1 - Sempre verifique se todas as peças estão na posição correta antes de aplicar uma fórmula.
                </Text>
                <Text style={estilos.texto}>
                    2 - Não tenha medo de experimentar diferentes abordagens. A resolução do cubo pode exigir tentativas e erros.
                </Text>
                <Text style={estilos.texto}>
                    3 - Se você ficar preso, faça uma pausa e volte mais tarde com uma nova perspectiva.
                </Text>
                <Text style={estilos.texto}>
                    4 - Caso tenha dúvidas, consulte materiais de apoio ou peça ajuda a alguém mais experiente.
                </Text>
                <Text style={estilos.texto}>
                    5 - Se tiver alguma dúvida, utilize nosso ChatBot Online, disponível na aba de CuboChats.
                </Text>

                <Text style={estilos.textoVeja}>Veja também:</Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Movimentação', { screen: 'MovimentacaoAvancada' })}>
                    <Image source={require('../assets/Capas/MovimentacaoAvancada.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Movimentação Avançada</Text>
                    <Text style={estilos.cardDescricao}>Aprenda as movimentações avançadas do cubo mágico.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'ExtraBasico' })}>
                    <Image source={require('../assets/Capas/ExtraBasico.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Extra Básico</Text>
                    <Text style={estilos.cardDescricao}> Aprenda a movimentos além do básico para resolver o cubo mágico.</Text>
                </TouchableOpacity>

                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}
