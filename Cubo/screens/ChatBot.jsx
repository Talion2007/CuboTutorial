import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  ScrollView
} from 'react-native';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';

export default function ChatBot() {
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: 'Olá, eu sou o ChatBot, basta dizer "Oi" para iniciar! 😁', proprio: false }
  ]);

  const scrollViewRef = useRef(null);

  function enviarMensagem() {
    if (mensagem.length > 280) {
      Alert.alert('Atenção!!!', 'A mensagem não pode ter mais de 280 caracteres.');
      return;
    }

    if (mensagem.trim()) {
      const novaMensagem = { id: Date.now(), texto: mensagem, proprio: true };
      setMensagens(prev => [...prev, novaMensagem]);
      responderBot(mensagem);
      setMensagem('');
      Keyboard.dismiss();
    }
  }

  function responderBot(textoUsuario) {
    let resposta = '';

    if (textoUsuario.toLowerCase().includes('oi') || textoUsuario.toLowerCase().includes('olá')) {
      resposta = 'Oi! 😄\n\nSe quiser ouvir sobre a Estrutura do Cubo, digite "estrutura" \n\nSe quiser ouvir sobre as Movimentação do Cubo, digite "movimentacao" \n\nSe quiser ouvir sobre o Metodo Básico, digite "metodo basico" \n\nSe quiser ouvir sobre Outros Tópicos, digite "outros" \n\nCaso deseje limpar o chat, digite "limpar"';
    }
    else if (textoUsuario.toLowerCase().includes('estrutura')) {
      resposta = 'A Estrutura do Cubo é essencial para sua resolução do quebra-cabeça. Aqui no Tutorial, na página "Estrutura do Cubo", você encontrará informações detalhadas sobre cada parte do cubo e sobre casos impossíveis 😀. \n\nSe quiser saber mais sobre as Peças do Cubo, digite "peças". \n\nSe quiser saber mais sobre os Casos Impossíveis, digite "casos impossíveis".';
    }
    else if (textoUsuario.toLowerCase().includes('peças') || textoUsuario.toLowerCase().includes('pecas')) {
      resposta = 'As Peças do Cubo são os componentes que formam o quebra-cabeça. Existem três tipos principais: centros, meios e quinas. Cada um tem um papel específico na estrutura do cubo. \n\nSe quiser saber com mais detalhes, entre na página "Estrutura do Cubo", e depois em "Peças do Cubo"! 😉\n\nVocê tambem pode perguntar sobre as peças individuais, escrevendo "centros", "meios" ou "quinas", ou perguntar outras coisas! 😎';
    }
    else if (textoUsuario.toLowerCase().includes('centros')) {
      resposta = 'Os Centros do Cubo são peças que possuem apenas uma cor, e sempre estão na mesma posição, ao centro do cubo. Se quiser saber mais sobre os Centros, entre na página "Estrutura do Cubo", e depois em "Peças do Cubo"! 😉\n\nVocê também pode perguntar sobre as peças individuais, escrevendo "centros", "meios" ou "quinas", ou perguntar outras coisas! 😎';
    }
        else if (textoUsuario.toLowerCase().includes('meios')) {
      resposta = 'Os Meios do Cubo são peças que possuem duas cores e estão localizados entre os cantos do cubo, e ao redor dos meios. Se quiser saber mais sobre os Meios, entre na página "Estrutura do Cubo", e depois em "Peças do Cubo"! 😉\n\nVocê também pode perguntar sobre as peças individuais, escrevendo "centros", "meios" ou "quinas", ou perguntar outras coisas! 😎';
    }
    else if (textoUsuario.toLowerCase().includes('quinas')) {
      resposta = 'As Quinas do Cubo são peças que possuem três cores e estão localizadas nos cantos do cubo. Se quiser saber mais sobre as Quinas, entre na página "Estrutura do Cubo", e depois em "Peças do Cubo"! 😉\n\nVocê também pode perguntar sobre as peças individuais, escrevendo "centros", "meios" ou "quinas", ou perguntar outras coisas! 😎';
    }
    else if (textoUsuario.toLowerCase().includes('casos impossíveis') || textoUsuario.toLowerCase().includes('casos impossiveis')) {
      resposta = 'Os Casos Impossíveis são situações que podem ocorrer durante a resolução do cubo, onde algumas peças parecem estar fora de lugar. Esses casos exigem técnicas especiais para serem resolvidos. \n\nVocê pode aprender mais sobre esses casos na página "Estrutura do Cubo", e depois em "Casos Impossíveis"! 😉\n\nSe quiser saber mais sobre outros tópicos, digite "outros"! 🙂';
    }
    else if (textoUsuario.toLowerCase().includes('movimentacao') || textoUsuario.toLowerCase().includes('movimentação') || textoUsuario.toLowerCase().includes('movimentaçao')) {
      resposta = 'A Movimentação do Cubo é muito importante para aprender as fórmulas de resolução. Para fins mais didaticos, nosso material separa a Movimentação em Movimentação Básica e Avançada! 😮 \n\nVocê pode aprender sobre a Movimentação Básica na página "Movimentação", e depois em "Movimentação Básica"! 😉\n\nSe já conhece a Movimentação Basica, não deixe de conferir a Movimentação Avançada, na página "Movimentação", e depois indo em "Movimentação Avançada"! 😄\n\nSe quiser saber mais sobre outros tópicos, digite "outros"! 🙂';
    }
    else if (textoUsuario.toLowerCase().includes('metodo basico') || textoUsuario.toLowerCase().includes('metodo básico') || textoUsuario.toLowerCase().includes('método basico') || textoUsuario.toLowerCase().includes('método básico')) {
      resposta = 'O Método Básico é uma técnica simples e eficaz para resolver o Cubo Mágico. Ele é ideal para iniciantes e ensina os passos fundamentais para a resolução do cubo. \n\nVocê pode aprender mais sobre o Método Básico na página "Método Básico", e depois em "Formulas"! 😉\n\nSe já conhece as Fórmulas Básicas, não deixe de conferir o Extra Básico, na página "Método Básico", e depois indo em "Extra Básico"! 😄\n\nSe quiser saber mais sobre outros tópicos, digite "outros"! 🙂';
    }
    else if (textoUsuario.toLowerCase().includes('outros')) {
      resposta = 'Outros tópicos ainda estão em desenvolvimento. Fique ligado para mais atualizações! 😉';
    }
    else {
      resposta = 'Não entendi... pode repetir? 🤔';
    }

    if (textoUsuario.toLowerCase().includes('limpar')) {
      setMensagens([{ id: 1, texto: 'Olá, eu sou o ChatBot, basta dizer "Oi" para iniciar! 😁.', proprio: false }]);
      return;
    }

    setTimeout(() => {
      setMensagens(prev => [...prev, { id: Date.now() + 1, texto: resposta, proprio: false }]);
    }, 500);
  }

  return (
    <SafeAreaView style={estilos.SafeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0} // ajuste fino
      >

        <View style={estilos.conteudoCentralizado}>
          {/* Lista de mensagens */}
          <ScrollView
            style={estilos.mensagensContainer}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
            contentContainerStyle={{ justifyContent: 'flex-end', alignItems: 'center' }}
          >
            {mensagens.length <= 2 ? (
              <Text style={estilos.titulo}>ChatBot</Text>
            ) : (
              <Text style={estilos.mensagem}></Text>
            )}
            {mensagens.map(msg => (
              <View
                key={msg.id}
                style={[
                  estilos.mensagem,
                  msg.proprio ? estilos.mensagemPropria : estilos.mensagemOutro
                ]}
              >
                <Text
                  style={[
                    estilos.textoMensagem,
                    !msg.proprio && { color: '#222' }
                  ]}
                >
                  {msg.texto}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* Campo de entrada */}
          <View style={estilos.inputContainer}>
            <TextInput
              placeholder="Digite sua mensagem..."
              value={mensagem}
              onChangeText={setMensagem}
              style={estilos.inputMensagem}
              multiline
              maxLength={500}
            />
            <TouchableOpacity
              style={[
                estilos.botaoEnviar,
                !mensagem.trim() && estilos.botaoDesabilitado
              ]}
              onPress={enviarMensagem}
              disabled={!mensagem.trim()}
            >
              <Text style={estilos.textoBotao}>🖊</Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
