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
    ScrollView,
    Modal,
    Pressable
} from 'react-native';
import axios from 'axios';
import estilos from '../styles/estilos';
import Footer from '../components/Footer';
import { apiCagnin, apiFelipe } from '../components/ApiKeys'; // Certifique-se de que as chaves estão corretas

export default function Gemini() {
    const [modalVisible, setModalVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [mensagens, setMensagens] = useState([
        { id: 1, texto: 'Olá, eu sou o ChatBot Online, basta fazer a sua pergunta para começar! 😁', proprio: false }
    ]);

    const scrollViewRef = useRef(null);

    async function enviarMensagem() {
        if (mensagem.length > 500) {
            Alert.alert('Atenção!!!', 'A mensagem não pode ter mais de 500 caracteres.');
            return;
        }

        if (mensagem.trim()) {
            const novaMensagem = { id: Date.now(), texto: mensagem, proprio: true };
            setMensagens(prev => [...prev, novaMensagem]);
            setMensagem('');
            Keyboard.dismiss();
            setLoading(true);

            setTimeout(() => {
                responderBot(mensagem);
            }, 7500); // 1000ms = 1 segundo
        }
    }

    const apiKeys = [
        apiCagnin,
        apiFelipe
    ];

    async function responderBot(textoUsuario) {
        if (textoUsuario.toLowerCase().includes('limpar')) {
            setMensagens([{ id: 1, texto: 'Olá, eu sou o ChatBot Online, basta fazer a sua pergunta para começar! 😁', proprio: false }]);
            return;
        }

        const historicoConversa = mensagens
            .map(msg => `${msg.proprio ? 'Você' : 'ChatBot'}: ${msg.texto}`)
            .join('\n');

        let respostaIA = "Desculpe, não entendi. 🤔";

        for (let key of apiKeys) {
            try {
                const res = await axios.post(
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
                    {
                        contents: [
                            {
                                parts: [
                                    {
                                        text: `
    Seu nome é ChatBot Online, do App CuboTutorial!
    Você é um especialista em cubo mágico (Cubo de Rubik). 
    Responda de forma amigável e didática usando emojis positivos 😁😄😉😎🤔.
    Não saia do escopo cubo mágico. 
    Caso pergunte, Felipe Cagnin é o Desenvolvedor e o responsável por este projeto.
    Aqui está o histórico da conversa:
    ${historicoConversa}
    Pergunta atual: ${textoUsuario}
    `
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        headers: { "Content-Type": "application/json" },
                        params: { key }
                    }
                );

                respostaIA = res.data.candidates[0]?.content?.parts[0]?.text || respostaIA;
                break; // se deu certo, sai do loop
            } catch (err) {
                console.warn(`Erro com a chave ${key}, tentando próxima...`);
                // continua para a próxima chave
            }
        }

        setMensagens(prev => [
            ...prev,
            { id: Date.now() + 1, texto: respostaIA, proprio: false }
        ]);
        setLoading(false);
    }

    return (
        <SafeAreaView style={estilos.SafeArea}>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={estilos.centeredView}>
                    <View style={estilos.modalView}>
                        <Text style={estilos.titulo}>Atenção!</Text>
                        <Text style={estilos.textoDescritivoModal}>
                            O ChatBot Online é uma ferramenta experimental baseada na API Gemini do Google!
                        </Text>
                        <Text style={estilos.textoDescritivoModal}>
                            Ele possui limites de uso, evite enviar mensagens excessivas!
                        </Text>
                        <Text style={estilos.textoDescritivoModal}>
                            Sujeito a erros e consumo de dados móveis!
                        </Text>
                        <Pressable
                            style={[estilos.botaoModal]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={estilos.textoModal}>Concordar e Continuar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View style={estilos.conteudoCentralizado}>
                    <ScrollView
                        style={estilos.mensagensContainer}
                        ref={scrollViewRef}
                        onContentSizeChange={() =>
                            scrollViewRef.current?.scrollToEnd({ animated: true })
                        }
                        contentContainerStyle={{ justifyContent: 'flex-end', alignItems: 'center' }}
                    >
                        {mensagens.length <= 2 ? (
                            <Text style={estilos.titulo}>ChatBot Online</Text>
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
                        {loading && (
                            <View
                                style={[
                                    estilos.mensagem,
                                    estilos.mensagemOutro
                                ]}
                            >
                                <Text
                                    style={[
                                        estilos.textoMensagem,
                                        { color: '#222' }
                                    ]}
                                >
                                    Maquina pensando...
                                </Text>
                            </View>
                        )}
                    </ScrollView>

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