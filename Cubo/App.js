// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet, Platform } from 'react-native'; // <--- MANTENHA O 'Platform' AQUI

import TelaInicio from './components/TelaInicio';
import Estrutura from './components/Estrutura';
import Movimentacao from './components/Movimentacao';
import MetodoBasico from './components/MetodoBasico';
import MetodoAvancado from './components/MetodoAvancado';
import ExtraAvancado from './components/ExtraAvancado';
import Metodo2x2 from './components/Metodo2x2';

const Drawer = createDrawerNavigator();
// Componentes das telas
// App principal
export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        screenOptions={{
          // Cor de fundo do drawer
          drawerStyle: {
            backgroundColor: '#2c3e50', // Azul escuro
            width: 275,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 }, // Sombra para baixo
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8, // Elevação para Android
          },

          headerRight: () => (
            <Image
              source={require('./assets/cube_icon.png')} // <-- SEU ARQUIVO DE IMAGEM AQUI
              style={styles.headerIconRight}
            />
          ),

          headerStyle: {
            backgroundColor: '#fbfbffff', // Azul escuro
            height: 95, // Aumenta a altura para dar mais "respiração"
            // Sombra mais proeminente e suave para um visual profissional
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 }, // Sombra sutil para baixo
            shadowOpacity: 0.28, // Transparência da sombra
            shadowRadius: 4.65, // Suavidade da sombra
            elevation: 5, // Elevação para Android (simula sombra)
            borderBottomLeftRadius: 3, // Um leve arredondamento na base esquerda
            borderBottomRightRadius: 3, // E na base direita
          },
          headerTitleStyle: {
            fontWeight: 'bold', // Peso da fonte do título (já estava bom)
            fontSize: 20, // Título um pouco maior para destaque
            color: '#26283dff', // Cor do título no cabeçalho (branco/claro)
            // Se precisar de alinhamento mais preciso, pode usar marginHorizontal
          },
          headerTitleAlign: "center", // Garante que o título esteja centralizado
          headerTintColor: "#26283dff", // Cor dos ícones (como o botão de menu/voltar) no header.
          // Escolha uma cor que contraste bem com o headerStyle.

          // Estilo dos labels (texto dos itens)
          drawerLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#ecf0f1', // Texto claro
            marginTop: 5,
          },
          // Cor do item ativo
          drawerActiveTintColor: '#e74c3c', // Vermelho
          // Cor do item inativo
          drawerInactiveTintColor: '#bdc3c7', // Cinza claro
          // Cor de fundo do item ativo
          drawerActiveBackgroundColor: '#34495e',
          // Cor do ícone
          drawerIconStyle: {
            tintColor: '#ecf0f1',
          }
        }}
      >
        <Drawer.Screen
          name="Início"
          component={TelaInicio}
          options={{ title: 'Home Page ' }}
        />
        <Drawer.Screen
          name="Estrutura"
          component={Estrutura}
          options={{ title: 'Estrutura do Cubo' }}
        />
        <Drawer.Screen
          name="Movimentacao"
          component={Movimentacao}
          options={{ title: 'Movimentação' }}
        />
        <Drawer.Screen
          name="MetodoBasico"
          component={MetodoBasico}
          options={{ title: 'Método Básico' }}
        />
        <Drawer.Screen
          name="MetodoAvancado"
          component={MetodoAvancado}
          options={{ title: 'Método Avançado' }}
        />
        <Drawer.Screen
          name="ExtraAvancado"
          component={ExtraAvancado}
          options={{ title: 'Extra Avançado' }}
        />
        <Drawer.Screen
          name="Metodo2x2"
          component={Metodo2x2}
          options={{ title: 'Método 2x2' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIconRight: {
    width: 30, // Ajuste o tamanho conforme necessário
    height: 30, // Ajuste o tamanho conforme necessário
    marginRight: 15, // Espaçamento da borda direita
    resizeMode: 'contain', // Garante que a imagem se ajuste ao tamanho sem cortar
  },
});