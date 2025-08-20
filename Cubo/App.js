// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  StyleSheet,
  Platform,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useState } from "react";

// Importe todas as suas telas
import TelaInicio from "./screens/TelaInicio";
import Estrutura from "./screens/Estrutura";
import PecasCubo3x3 from "./screens/Pecas";
import CasosImpossiveis from "./screens/CasosImpossiveis";
import Movimentacao from "./screens/Movimentacao";
import MovimentosBasicos from "./screens/MovimentacaoBasica";
import MetodoBasico from "./screens/MetodoBasico";
import MetodoAvancado from "./screens/MetodoAvancado";
import ExtraAvancado from "./screens/ExtraAvancado";
import Metodo2x2 from "./screens/Metodo2x2";
import CuboChat from "./screens/CuboChat";
import ChatBot from "./screens/ChatBot";
import Gemini from "./screens/Gemini";
import TelaIndisponivel from "./screens/TelaIndisponivel";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
}

function MetodoBasicoFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MetodoBasico" component={MetodoBasico} />
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

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        screenOptions={{
          // Mantenha todas as suas opções de estilo aqui
          drawerStyle: {
            backgroundColor: "#2c3e50",
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
                source={require("./assets/icon.png")}
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
            color: "#ecf0f1",
            marginTop: 5,
          },
          drawerActiveTintColor: "#e74c3c",
          drawerInactiveTintColor: "#bdc3c7",
          drawerActiveBackgroundColor: "#34495e",
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
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});
