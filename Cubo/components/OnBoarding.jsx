import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions,
    InteractionManager,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const pages = [
    {
        title: 'Explore o Mundo',
        subtitle: 'Veja lugares incríveis ao seu alcance.',
        image: 'https://placehold.co/300x200?text=Mundo',
    },
    {
        title: 'Conecte-se com Pessoas',
        subtitle: 'Encontre comunidades que inspiram.',
        image: 'https://placehold.co/300x200?text=Conexão',
    },
    {
        title: 'Aproveite ao Máximo',
        subtitle: 'Tenha uma jornada única com nosso app.',
        image: 'https://placehold.co/300x200?text=Jornada',
    },
];

export default function Onboarding() {
    const [pageIndex, setPageIndex] = useState(0);
    const opacity = useRef(new Animated.Value(0)).current;
    const imageY = useRef(new Animated.Value(40)).current;
    const titleY = useRef(new Animated.Value(40)).current;
    const subtitleY = useRef(new Animated.Value(40)).current;

    const navigation = useNavigation();

    useEffect(() => {
        InteractionManager.runAfterInteractions(() => animateIn());
    }, [pageIndex]);

    const animateIn = () => {
        opacity.setValue(0);
        imageY.setValue(40);
        titleY.setValue(40);
        subtitleY.setValue(40);

        Animated.stagger(200, [
            Animated.timing(opacity, { toValue: 1, duration: 400, useNativeDriver: true }),
            Animated.timing(imageY, { toValue: 0, duration: 400, useNativeDriver: true }),
            Animated.timing(titleY, { toValue: 0, duration: 400, useNativeDriver: true }),
            Animated.timing(subtitleY, { toValue: 0, duration: 400, useNativeDriver: true }),
        ]).start();
    };

    const nextPage = async () => {
        if (pageIndex < pages.length - 1) {
            setPageIndex(pageIndex + 1);
        } else {
            await AsyncStorage.setItem('alreadyLaunched', 'true'); // marca como já visto
            navigation.replace('Inicio'); // volta para a tela inicial
        }
    };

    const previousPage = () => {
        if (pageIndex > 0) setPageIndex(pageIndex - 1);
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.page, { opacity, transform: [{ translateY: imageY }] }]}>
                <Image source={{ uri: pages[pageIndex].image }} style={styles.image} />
                <Animated.Text style={[styles.title, { opacity, transform: [{ translateY: titleY }] }]}>
                    {pages[pageIndex].title}
                </Animated.Text>
                <Animated.Text style={[styles.subtitle, { opacity, transform: [{ translateY: subtitleY }] }]}>
                    {pages[pageIndex].subtitle}
                </Animated.Text>
            </Animated.View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={previousPage} style={styles.button} disabled={pageIndex === 0}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={nextPage} style={styles.button}>
                    <Text style={styles.buttonText}>
                        {pageIndex === pages.length - 1 ? 'Começar' : 'Próximo'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 50 },
    page: { width, alignItems: 'center', paddingHorizontal: 30 },
    image: { width: 300, height: 200, marginBottom: 20, borderRadius: 10 },
    title: { fontSize: 24, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
    subtitle: { fontSize: 16, color: '#555', textAlign: 'center' },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 },
    button: { backgroundColor: '#2a9d8f', padding: 15, borderRadius: 10, marginBottom: 20, flex: 1, marginHorizontal: 5 },
    buttonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});
