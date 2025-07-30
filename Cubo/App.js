// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaInicio from './components/TelaInicio';
const Drawer = createDrawerNavigator();
// Componentes das telas
// App principal
export default function App() {
return (
<NavigationContainer>
   <Drawer.Navigator
   initialRouteName= "Início"
 screenOptions={{
 // Cor de fundo do drawer
 drawerStyle: {
 backgroundColor: '#2c3e50', // Azul escuro
 width: 250,
 },
 // Cor do header
 headerStyle: {
 backgroundColor: '#34495e', // Azul acinzentado
 },

 headerTitleStyle: {
          fontWeight: 'bold', // Estilo da fonte do título
          fontSize: 18,
        },
        headerTitleAlign: "center", // Alinhamento do título (left, center, right)
      

 headerTintColor: '#fff',
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
options={{ title: 'CuboTutorial ' }}
/>
</Drawer.Navigator>
</NavigationContainer>
);
}