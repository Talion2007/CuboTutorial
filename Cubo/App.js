// App.js
import "react-native-gesture-handler";
import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Linking,
  View,
  Text,
  Animated,
  Dimensions,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Imagens
import Aprenda from "./assets/OnBoarding/Aprenda.jpeg";
import Explore from "./assets/OnBoarding/Explore.jpeg";
import Inspire from "./assets/OnBoarding/Inspire.jpeg";

// Importa suas telas
import TelaInicio from "./screens/TelaInicio";
import Estrutura from "./screens/Estrutura";
import PecasCubo3x3 from "./screens/Pecas";
import CasosImpossiveis from "./screens/CasosImpossiveis";
import Movimentacao from "./screens/Movimentacao";
import MovimentosBasicos from "./screens/MovimentacaoBasica";
import MovimentacaoAvancada from "./screens/MovimentacaoAvancada";
import MetodoBasico from "./screens/MetodoBasico";
import FormulasBasicas from "./screens/Formulas";
import ExtraBasico from "./screens/ExtraBasico";
import CuboFiguras from "./screens/CuboFiguras";
import MetodoAvancado from "./screens/MetodoAvancado";
import ExtraAvancado from "./screens/ExtraAvancado";
import Metodo2x2 from "./screens/Metodo2x2";
import CuboChat from "./screens/CuboChat";
import ChatBot from "./screens/ChatBot";
import Gemini from "./screens/Gemini";
import TelaIndisponivel from "./screens/TelaIndisponivel";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const { width } = Dimensions.get("window");

// ---- Flows ----
function EstruturaFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Estrutura" component={Estrutura} />
      <Stack.Screen name="Pecas" component={PecasCubo3x3} />
      <Stack.Screen name="CasosImpossiveis" component={CasosImpossiveis} />
    </Stack.Navigator>
  );
}

function MovimentacaoFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Movimentacao" component={Movimentacao} />
      <Stack.Screen name="MovimentosBasicos" component={MovimentosBasicos} />
      <Stack.Screen
        name="MovimentacaoAvancada"
        component={MovimentacaoAvancada}
      />
    </Stack.Navigator>
  );
}

function MetodoBasicoFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MetodoBasico" component={MetodoBasico} />
      <Stack.Screen name="FormulasBasicas" component={FormulasBasicas} />
      <Stack.Screen name="ExtraBasico" component={ExtraBasico} />
      <Stack.Screen name="CuboFiguras" component={CuboFiguras} />
    </Stack.Navigator>
  );
}

function MetodoAvancadoFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MetodoAvancado" component={MetodoAvancado} />
    </Stack.Navigator>
  );
}

function ExtraAvancadoFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExtraAvancado" component={ExtraAvancado} />
    </Stack.Navigator>
  );
}

function Metodo2x2Flow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Metodo2x2" component={Metodo2x2} />
    </Stack.Navigator>
  );
}

function CuboChatsFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CuboChatPage" component={CuboChat} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="Gemini" component={Gemini} />
    </Stack.Navigator>
  );
}

// ---- Onboarding Interno ----
const onboardingPages = [
  {
    title: "Aprenda",
    subtitle:
      "Domine os fundamentos do Cubo Mágico e comece a resolver qualquer situação.",
    image: Aprenda,
  },
  {
    title: "Explore",
    subtitle:
      "Explore métodos avançados e personalize suas estratégias para cada desafio.",
    image: Explore,
  },
  {
    title: "Inspire",
    subtitle:
      "Compartilhe seus resultados e inspire outros a se tornarem mestres do Cubo.",
    image: Inspire,
  },
];

const resetOnboarding = async () => {
  await AsyncStorage.removeItem("hasSeenOnboarding");
  alert("Onboarding resetado! Reinicie o app para testar novamente.");
};

function Onboarding({ onFinish }) {
  const [pageIndex, setPageIndex] = useState(0);
  const opacity = useRef(new Animated.Value(0)).current;
  const imageY = useRef(new Animated.Value(40)).current;
  const titleY = useRef(new Animated.Value(40)).current;
  const subtitleY = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => animateIn());
  }, [pageIndex]);

  const animateIn = () => {
    opacity.setValue(0);
    imageY.setValue(40);
    titleY.setValue(40);
    subtitleY.setValue(40);

    Animated.stagger(200, [
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(imageY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(titleY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const nextPage = async () => {
    if (pageIndex < onboardingPages.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
      onFinish();
    }
  };

  const previousPage = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  return (
    <View style={stylesOnboarding.container}>
      <Animated.View
        style={[
          stylesOnboarding.page,
          { opacity, transform: [{ translateY: imageY }] },
        ]}
      >
        <Image
          source={onboardingPages[pageIndex].image}
          style={stylesOnboarding.image}
        />
        <Animated.Text
          style={[
            stylesOnboarding.title,
            { opacity, transform: [{ translateY: titleY }] },
          ]}
        >
          {onboardingPages[pageIndex].title}
        </Animated.Text>
        <Animated.Text
          style={[
            stylesOnboarding.subtitle,
            { opacity, transform: [{ translateY: subtitleY }] },
          ]}
        >
          {onboardingPages[pageIndex].subtitle}
        </Animated.Text>
      </Animated.View>
      <View style={stylesOnboarding.buttonContainer}>
        <TouchableOpacity onPress={nextPage} style={stylesOnboarding.button}>
          <Text style={stylesOnboarding.buttonText}>
            {pageIndex === onboardingPages.length - 1 ? "Começar" : "Próximo"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ---- Componente Principal App ----
export default function App() {
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("hasSeenOnboarding").then((value) => {
      if (value === null) setShowOnboarding(true);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  if (showOnboarding) {
    return <Onboarding onFinish={() => setShowOnboarding(false)} />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#E06942",
            width: 275,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Repositório",
                  `\nVocê será redirecionado para uma aplicação externa, onde poderá baixar versões mais recentes, ou testar versões mais antigas. \n\nVocê deseja abrir o repositório de versões do aplicativo? \n`,
                  [
                    {
                      text: "+",
                      onPress: () =>
                        AsyncStorage.removeItem("hasSeenOnboarding"),
                    },
                    { text: "Cancelar", style: "cancel" },
                    {
                      text: "Abrir",
                      onPress: () =>
                        Linking.openURL(
                          "https://github.com/Talion2007/CuboTutorial/releases"
                        ),
                    },
                  ]
                )
              }
            >
              <Image
                source={require("./assets/iconApp.png")}
                style={styles.headerIconRight}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#fbfbffff",
            height: 95,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.28,
            shadowRadius: 4.65,
            elevation: 5,
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#26283dff",
          },
          headerTitleAlign: "center",
          headerTintColor: "#26283dff",
          drawerLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#ffffffff",
            marginTop: 5,
          },
          drawerActiveTintColor: "#e74c3c",
          drawerInactiveTintColor: "#bdc3c7",
          drawerActiveBackgroundColor: "#EA9C3E",
          drawerIconStyle: {
            tintColor: "#ecf0f1",
          },
        }}
      >
        <Drawer.Screen name="Início" component={TelaInicio} />
        <Drawer.Screen name="Estrutura do Cubo" component={EstruturaFlow} />
        <Drawer.Screen name="Movimentação" component={MovimentacaoFlow} />
        <Drawer.Screen name="Método Básico" component={MetodoBasicoFlow} />
        <Drawer.Screen name="Método Avançado" component={MetodoAvancadoFlow} />
        <Drawer.Screen name="Extra Avançado" component={ExtraAvancadoFlow} />
        <Drawer.Screen name="Método 2x2" component={Metodo2x2Flow} />
        <Drawer.Screen name="CuboChats" component={CuboChatsFlow} />
        <Drawer.Screen
          name="TelaIndisponivel"
          component={TelaIndisponivel}
          options={{
            title: "Tela Indisponível",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIconRight: {
    width: 28,
    height: 28,
    margin: 12,
    resizeMode: "contain",
  },
});

const stylesOnboarding = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  page: { width, alignItems: "center", paddingHorizontal: 30 },
  image: {
    width: "100%",
    height: "60%",
    marginBottom: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: { fontSize: 16, color: "#555", textAlign: "center" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#E06942",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
