import 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function MetodoAvancado() {

  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.conteudoScroll} contentContainerStyle={estilos.conteudoCentralizado}>
      <Text style={estilos.titulo}> Método Avançado</Text>
      <Text style={estilos.texto}>Os passos de um cuber que resolve o cubo em 1 minuto é o mesmo do que resolve em menos de 10 segundos, porém, o que faz no menor tempo utiliza diversos atalhos que fazem parte do método avançado, que você provavelmente já ouviu falar como Fridrich ou então a pela sigla CFOP, composta pelo Cross (a mesma do Método Básico), F2L, OLL, e PLL, que significam: </Text>

      {/* Card para a tela "Movimentação" */}
      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/F2L.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}>F2L - 2 Camadas</Text>
        <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as First Two Layers.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/OLL.png')} style={estilos.imagemCard} />
        <Text style={estilos.cardTitulo}> OLL - Orientação</Text>
        <Text style={estilos.cardDescricao}> Aqui você pode encontrar informações sobre as  OrientationLast Layers.</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.card} onPress={() => navigation.navigate('TelaIndisponivel')}>
        <Image source={require('../assets/PLL.png')} style={estilos.imagemCard} />
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


      <View style={estilos.footer}>
        <Text style={{ color: '#666' }}>© 2025 CuboTutorial. Todos os direitos reservados.</Text>
        <Text style={{ color: '#666' }}>Desenvolvido por Felipe Cagnin</Text>
      </View>

    </ScrollView>
  );
}

// Estilos
const estilos = StyleSheet.create({
  titulo: {
    fontSize: 27,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto',
    width: '80%',
    padding: 20,
    marginTop: 20,
    marginBottom: 10,
  },

  texto: {
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'justify',
    width: '85%',
    color: '#666'
  },

  conteudoScroll: {
    flex: 1,
    padding: 15,// Adicionando um fundo claro para melhor visibilidade
    backgroundColor: '#fbfbffff', // Azul claro
  },
  conteudoCentralizado: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imagemLogo: {
    width: 350,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10, // Bordas arredondadas para a imagem
    marginBottom: 20,
    marginTop: -5,
  },

  imagemCard: {
    width: 220,
    height: 220,
    resizeMode: 'contain', // Garante que a imagem se ajuste ao tamanho do card
    marginBottom: 10, // Espaço entre a imagem e o texto do card
    borderRadius: 10, // Bordas arredondadas para a imagem do card
  },

  card: {
    borderRadius: 12, // Bordas mais arredondadas
    padding: 20,
    marginVertical: 10, // Espaço vertical entre os cards
    width: '85%', // Ligeiramente mais largo para preencher a tela
    maxWidth: 400, // Limite a largura máxima para tablets
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    elevation: 2, // Sombra para dar profundidade
    backgroundColor: '#fbfbffff', // Fundo branco para contraste
    // Estilos de sombra aprimorados para um visual mais profissional
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8, // Mais espaço abaixo do título
    color: '#333', // Cor de texto mais escura
    textAlign: 'center',
  },
  cardDescricao: {
    fontSize: 14,
    color: '#666', // Cor de texto mais clara para a descrição
    textAlign: 'center',
    lineHeight: 20, // Altura da linha para melhor leitura
  },

  footer: {
    flex: 1,
    marginTop: 30,
    padding: 25,
    paddingBottom: 75,
    width: '110%',
    elevation: 8, // Sombra para dar profundidade
    backgroundColor: '#fbfbffff', // Fundo branco para contraste
    textAlign: 'center',
  },
});