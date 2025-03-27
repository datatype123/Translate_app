import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LightTheme, DarkTheme } from '../config/Theme';

const TranslateChat = () => {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const handleTranslate = () => {
        // TODO: Implement translation logic
        setTranslatedText('Đây là kết quả dịch...');
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter text to translate"
                        placeholderTextColor={LightTheme.colors.text.disabled}
                        value={inputText}
                        onChangeText={setInputText}
                        multiline
                    />
                    <TouchableOpacity style={styles.translateButton} onPress={handleTranslate}>
                        <Image 
                            source={require('../assets/icon/translate.png')}
                            style={styles.translateIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>
                        {translatedText || 'Translation will appear here...'}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LightTheme.colors.background,
    },
    header: {
        padding: 16,
        backgroundColor: LightTheme.colors.background,
        borderBottomWidth: 1,
        borderBottomColor: LightTheme.colors.border,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: LightTheme.colors.text.primary,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: LightTheme.colors.surface,
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: LightTheme.colors.border,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#1E293B',
        minHeight: 100,
        textAlignVertical: 'top',
    },
    translateButton: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    translateIcon: {
        width: 24,
        height: 24,
        tintColor: '#3B82F6',
    },
    resultContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    resultText: {
        fontSize: 16,
        color: '#64748B',
        lineHeight: 24,
    },
});

export default TranslateChat;
