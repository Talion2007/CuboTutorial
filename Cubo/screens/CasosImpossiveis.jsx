import 'react-native-gesture-handler';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useRef, useCallback } from 'react';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function CasosImpossiveis() {

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
                <Text style={estilos.titulo}>Casos Impossíveis</Text>
                <Text style={estilos.texto}>
                    Os casos impossíveis no cubo 3x3 acontecem quando o cubo foi montado de forma incorreta
                    após ser desmontado ou remontado com peças trocadas. Eles não podem ser resolvidos apenas
                    com movimentos normais e exigem desmontagem ou reposicionamento das peças. Os casos impossíveis são:
                </Text>

                {/* Cards com exemplos de casos impossíveis */}
                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/CasosImpossiveis/CasosImpossiveisMeios.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Paridade de Meio</Text>
                    <Text style={estilos.cardDescricao}>
                        Os meios são sempre orientados aos pares. Ou seja, não é possível orientar apenas 1 meio. Sendo assim, quando for resolver a cuz do amarelo e sobrar apenas 1 meio para ser orientado, seu cubo está num caso impossível.
                    </Text>
                </View>

                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/CasosImpossiveis/CasosImpossiveisQuinas.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Paridade de Quina</Text>
                    <Text style={estilos.cardDescricao}>
                        As quinas são sempre orientadas aos pares e em sentidos diferentes, ou em trios quando as 3 forem para o mesmo sentido, ou seja, não é possível orientar apenas 2 quinas no mesmo sentido e muito menos apenas 1 quina sozinha.
                    </Text>
                </View>

                <View style={estilos.cardNeutro}>
                    <Image source={require('../assets/CasosImpossiveis/CasosImpossiveisPermutacao.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Permutação Impossível</Text>

                    <Text style={estilos.cardDescricao}>
                        As permutações acontecem sempre em trios, dupla de pares ou dupla de trios. Ou seja, não é possível permutar apenas 2 peças, sejam elas 2 quinas ou 2 meios.
                    </Text>
                </View>

                <Text style={estilos.texto}>
                    Esses casos não acontecem durante a resolução normal. Se você encontrar um deles,
                    é sinal de que o cubo foi alterado fisicamente e precisará ser desmontado e corrigido.
                </Text>

                <Text style={estilos.texto}>Como evitar:</Text>
                <Text style={estilos.texto}>1 - Evite desmontar o cubo sem necessidade.</Text>
                <Text style={estilos.texto}>2 - Caso desmonte, monte seguindo a posição correta das peças.</Text>
                <Text style={estilos.texto}>3 - Durante a resolução, confira se não há casos impossíveis.</Text>
                <Text style={estilos.texto}>4 - Conhecer esses padrões ajuda a identificar problemas rapidamente.</Text>

                <Text style={estilos.textoVeja}>Veja também:</Text>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('Pecas')}>
                    <Image source={require('../assets/Capas/Pecas.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Peças do Cubo</Text>
                    <Text style={estilos.cardDescricao}>Aprenda as peças que compõem o cubo mágico.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
                    <Image source={require('../assets/Capas/MovimentacaoBasica.png')} style={estilos.imagemCard} />
                    <Text style={estilos.cardTitulo}>Movimentação Básica</Text>
                    <Text style={estilos.cardDescricao}>Aprenda as movimentações básicas do cubo mágico.</Text>
                </TouchableOpacity>


                <Footer />
            </ScrollView>
        </SafeAreaView>
    );
}
