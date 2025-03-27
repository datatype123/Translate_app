import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {toggleTheme } from '../store/store';
import { LightTheme, DarkTheme } from '../config/Theme';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Settings = () => {
    const dispatch = useAppDispatch();
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === 'light' ? LightTheme : DarkTheme;

    const settingsItems = [
        {
            id: 'theme',
            title: 'Dark Mode',
            icon: require('../assets/icon/account.png'),
            type: 'switch',
            value: currentTheme === 'dark',
            onToggle: () => dispatch(toggleTheme()),
        },
        {
            id: 'language',
            title: 'Language',
            icon: require('../assets/icon/account.png'),
            type: 'arrow',
            onPress: () => {},
        },
        {
            id: 'notification',
            title: 'Notifications',
            icon: require('../assets/icon/account.png'),
            type: 'switch',
            value: true,
            onToggle: () => {},
        },
        {
            id: 'privacy',
            title: 'Privacy Policy',
            icon: require('../assets/icon/account.png'),
            type: 'arrow',
            onPress: () => {},
        },
        {
            id: 'about',
            title: 'About App',
            icon: require('../assets/icon/account.png'),
            type: 'arrow',
            onPress: () => {},
        },
    ];

    const renderSettingItem = (item: typeof settingsItems[0]) => {
        return (
            <TouchableOpacity 
                key={item.id}
                style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}
                onPress={item.type === 'arrow' ? item.onPress : undefined}
            >
                <View style={styles.settingItemLeft}>
                    <Image 
                        source={item.icon}
                        style={[styles.settingIcon, { tintColor: theme.colors.text.primary }]}
                    />
                    <Text style={[styles.settingTitle, { color: theme.colors.text.primary }]}>
                        {item.title}
                    </Text>
                </View>
                {item.type === 'switch' && (
                    <Switch
                        value={item.value}
                        onValueChange={item.onToggle}
                        trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
                        thumbColor={theme.colors.surface}
                    />
                )}
                {item.type === 'arrow' && (
                    <Image 
                        source={require('../assets/icon/account.png')}
                        style={[styles.arrowIcon, { tintColor: theme.colors.text.secondary }]}
                    />
                )}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.content}>
                {settingsItems.map(renderSettingItem)}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
    },
    settingItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    arrowIcon: {
        width: 20,
        height: 20,
    },
});

export default Settings;
