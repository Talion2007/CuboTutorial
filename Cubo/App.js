// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet, Platform } from 'react-native'; // <--- MANTENHA O 'Platform' AQUI
import ChatBot from './screens/ChatBot';
import TelaInicio from './screens/TelaInicio';
import Estrutura from './screens/Estrutura';
import Movimentacao from './screens/Movimentacao';
import MetodoBasico from './screens/MetodoBasico';
import MetodoAvancado from './screens/MetodoAvancado';
import ExtraAvancado from './screens/ExtraAvancado';
import Metodo2x2 from './screens/Metodo2x2';
import TelaIndisponivel from './screens/TelaIndisponivel'; // Importando a tela de indisponibilidade

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
              source={require('./assets/icon.png')} // <-- SEU ARQUIVO DE IMAGEM AQUI
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
          options={{ title: 'Estrutura do Cubo', }}
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
          component={TelaIndisponivel}
          options={{
            title: 'Metodo 2x2'
          }}
        />
 <Drawer.Screen
          name="ChatBot"
          component={ChatBot}
          options={{
            title: 'ChatBot'
          }}
        />

        <Drawer.Screen
          name="TelaIndisponivel"
          component={TelaIndisponivel}
          options={{
            title: 'Tela Indisponível',
            drawerItemStyle: { display: 'none' } // Esconde do menu
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIconRight: {
    width: 70, // Ajuste o tamanho conforme necessário
    height: 70, // Ajuste o tamanho conforme necessário
    resizeMode: 'contain', // Garante que a imagem se ajuste ao tamanho sem cortar
  },
});