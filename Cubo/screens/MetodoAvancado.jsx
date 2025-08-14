import 'react-native-gesture-handler';
import { Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function MetodoAvancado() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
        <Text style={estilos.titulo}> Método Avançado</Text>
        <Text style={estilos.texto}>Os passos de um cuber que resolve o cubo em 1 minuto é o mesmo do que resolve em menos de 10 segundos, porém, o que faz no menor tempo utiliza diversos atalhos que fazem parte do método avançado, que você provavelmente já ouviu falar como Fridrich ou então a pela sigla CFOP, composta pelo Cross (a mesma do Método Básico), F2L, OLL, e PLL, que significam: </Text>

        {/* Card para a tela "Movimentação" */}
        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
          <Image source={require('../assets/Capas/F2L.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>F2L - 2 Camadas</Text>
          <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as First Two Layers.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
          <Image source={require('../assets/Capas/OLL.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}> OLL - Orientação</Text>
          <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as  OrientationLast Layers.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
          <Image source={require('../assets/Capas/PLL.png')} style={estilos.imagemCard} />
          <Text style={estilos.cardTitulo}>PLL  - Permutação</Text>
          <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as Permutation Last Layers.</Text>
        </TouchableOpacity>


        <Text style={estilos.texto}>Você percebeu que a ordem deste método é exatamente a mesma que aprendeu no método básico? Porém agora nós vamos aprender várias fórmulas extras dentro de cada uma dessas etapas pra que você execute tudo muito mais rápido.</Text>
        <Text style={estilos.texto}>Só pra ter uma ideia, até agora você aprendeu cerca de 10 fórmulas no método básico pra poder resolver o cubo em aproximadamente 1 minuto. O método avançado completo possui 119 fórmulas, além das fórmulas extras que pode ser aprendidas depois.</Text>
        <Text style={estilos.texto}>E eu não estou falando isso pra te assustar, é apenas pra você entender que resolver um cubo muito rápido não é apenas uma questão de velocidade, mas sim, e principalmente, uma questão de técnica, conhecimento e muito estudo, que é justamente o que eu vou te ensinar aqui.</Text>
        <Text style={estilos.texto}>Sugiro que, antes de iniciar os estudos do método avançado, você faça o treino de cruz, já que é a primeira etapa do método e de extrema importância para que seus tempos possam ter um bom resultado e assim você esteja preparado para iniciar as fórmulas novas.</Text>
        <Text style={estilos.texto}>Sugestão de estudo:

        </Text>
        <Text style={estilos.texto}>1 - Inicie com o treino de cruz até que esteja totalmente confortável em realizar a cruz inicial diretamente no branco e aplicando apenas 1 fórmula direta e sem pausas, conforme ensino no Método Básico desse tutorial.</Text>
        <Text style={estilos.texto}>2 - Agora você pode aprender os 7 primeiros casos do OLL onde a cruz do amarelo já está resolvida. Dessa forma você pode continuar executando os mesmos passos do método básico enquanto aprende as fórmulas novas. Sugiro que aprenda um caso por dia e pratique durante vários dias. </Text>
        <Text style={estilos.texto}>3 - Depois que os 7 casos do OLL estiverem bem memorizados você pode começar a aprender o 41 casos de F2L. Eu já dividi os casos semelhantes em alguns blocos, então aproveite disso e aprenda um bloco de cada vez. Pode ser 1 ou 2 fórmulas por dia, ou um bloco de fórmulas por semana. Não tenha pressa!</Text>
        <Text style={estilos.texto}>4 - Depois que o F2L estiver completo, você pode então iniciar o estudo dos casos de PLL. Vai perceber que as fórmulas são maiores e mais complexas, mas não se assuste! Minha dica é que você divida cada fórmula em pequenos blocos. Tente encontrar os padrões e perceba os movimentos semelhantes que cada caso possui, e assim procure sempre entender o que cada movimento faz. Você pode aprender 1 fórmula por dia, ou 2 por semana... Faça isso no tempo que se sentir mais confortável.</Text>
        <Text style={estilos.texto}>5 - Por fim, e não menos importante, você deve estudar os 50 casos restantes do OLL. Essa é a parte que a maioria desiste, pois acha que não é tão necessário assim. Mas o fato é que os melhores cubers do mundo aprenderam todos esses casos e muitos mais depois. Então, sim, se você quer atingir os melhores tempos você precisa aprender e aplicar esses casos. Mais uma vez, faça tudo com muita calma e no seu tempo.</Text>

        <Footer />

      </ScrollView>
    </SafeAreaView>
  );
}