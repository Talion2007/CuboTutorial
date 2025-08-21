import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRef, useCallback } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function ExtraBasico() {

    const navigation = useNavigation();
    const scrollRef = useRef(null);

    // Sempre voltar ao topo ao abrir a tela
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
                <Text style={estilos.titulo}>Extra Básico</Text>
                <Text style={estilos.texto}>
                    Utilizando apenas o método básico, você pode resolver o Cubo Mágico em até menos de 30 segundos.
                    Para isso, é preciso treinar bastante e aprender alguns movimentos extras que aceleram a solução.
                </Text>
                <Text style={estilos.texto}>
                    Antes de migrar para o método avançado, minha dica é extrair o máximo possível do método básico.
                    Esses extras vão te ajudar a economizar movimentos e ganhar velocidade!
                </Text>

                <Text style={estilos.texto}>
                    Aqui estão algumas formulas para ajudar a resolver o cubo mais rápido:
                </Text>

                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/ExtraBasico/CasoPonto.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Caso Ponto</Text>
                    <Text style={estilos.cardDescricao}>Fórmula padrão: F R U R' U' F'</Text>
                </View>

                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/ExtraBasico/CasoL.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Caso L</Text>
                    <Text style={estilos.cardDescricao}>Fórmula nova: F U R U' R' F' </Text>
                </View>

                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/ExtraBasico/CasoLinha.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Caso Linha</Text>
                    <Text style={estilos.cardDescricao}>Fórmula padrão: F R U R' U' F'</Text>
                </View>

                <Text style={estilos.texto}>
                    Perceba que no caso "L" a fórmula nova é quase igual à padrão, mas economiza 6 movimentos.
                </Text>

                <Text style={estilos.texto}>
                    Essa próxima fórmula é útil para inverter o meio da segunda camada.
                </Text>

                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/ExtraBasico/CasoExtra.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Inversão de Meio</Text>
                    <Text style={estilos.cardDescricao}>
                        Fórmula: R U' R' U F' U2 F U2 F' U F
                    </Text>
                </View>

                <Text style={estilos.texto}>
                    Com essas formulas, você conseguirá economizar um pouco de tempo na resolução do cubo, mas não deixe de continuar estudando.
                </Text>

                <Text style={estilos.texto}>
                    Confira a página de Métodos Avançados para mais dicas, e melhorar ainda mais sua velocidade!
                </Text>

                <Text style={estilos.subTitulo}>Dicas de Treino</Text>
                <Text style={estilos.texto}>1 - Treine cruz e look ahead (observação antecipada).</Text>
                <Text style={estilos.texto}>2-  Resolva várias vezes apenas até a cruz para ganhar velocidade.</Text>
                <Text style={estilos.texto}>3 - Pratique os extras até aplicar automaticamente.</Text>
                <Text style={estilos.texto}>4 - Só depois avance para o método avançado.</Text>

                <Text style={estilos.textoVeja}>Veja também:</Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'FormulasBasicas' })}>
                    <Image source={require('../assets/Capas/MetodoBasico.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Fórmulas</Text>
                    <Text style={estilos.cardDescricao}>Aprenda as fórmulas básicas para resolver o cubo mágico.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Método Básico', { screen: 'CuboFiguras' })}>
                    <Image source={require('../assets/Capas/CuboFiguras.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Cubo de Figuras</Text>
                    <Text style={estilos.cardDescricao}> Aprenda a completar e corrigir os cubos com figuras.</Text>
                </TouchableOpacity>

                <Footer />

            </ScrollView>
        </SafeAreaView>
    );
}
