import 'react-native-gesture-handler';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function TelaInicio() {
    return (
        <ScrollView style={estilos.conteudoScroll}  contentContainerStyle={estilos.conteudoCentralizado}>
            <Text style={estilos.texto}>🏠 Bem-vindo à Tela Inicial!</Text>
        </ScrollView>
    );
} 

// Estilos
const estilos = StyleSheet.create({
texto: {
fontSize: 18,
fontWeight: 'bold'
},
conteudoScroll: {
flex: 1,
padding: 15,
},
  conteudoCentralizado: {
    flexGrow: 1,
    alignItems: 'center',
  },
});