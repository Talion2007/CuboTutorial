import 'react-native-gesture-handler';
import { View, Text, Platform } from 'react-native';
import estilos from '../styles/estilos';

export default function Footer() {
  return (
    <View style={estilos.footer}>
      <Text style={{ color: '#666', textAlign: 'center' }}>© 2025 CuboTutorial. Todos os direitos reservados - {Platform.OS === 'ios' ? 'Versão iOS' : 'Versão Android'} 1.2.1</Text>
      <Text style={{ color: '#666', textAlign: 'center' }}>Desenvolvido por Felipe Cagnin </Text>
    </View>
  );
}