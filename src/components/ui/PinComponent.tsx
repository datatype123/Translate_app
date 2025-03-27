import React from "react";
import { View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { DarkTheme, LightTheme } from "../../config/Theme";

interface PinComponentProps {
    name: string;
    message: string;
    avatar: ImageSourcePropType;
    status: 'yellow' | 'blue' | 'gray' | 'green';
}

const PinComponent: React.FC<PinComponentProps> = ({ name, message, avatar, status }) => {
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === 'light' ? LightTheme : DarkTheme;
    const getStatusColor = () => {
        switch (status) {
            case 'yellow': return '#FFD700';
            case 'blue': return '#3B82F6';
            case 'gray': return '#9CA3AF';
            case 'green': return '#10B981';
            default: return '#FFD700';
        }
    };
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.surface,
            padding: 10,
            borderRadius: 12,
            shadowColor: theme.colors.shadow,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
        },
        messageContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        avatarContainer: {
            position: 'relative',
            marginRight: 12,
        },
        avatar: {
            width: 40,
            height: 40,
            borderRadius: 20,
        },
        onlineIndicator: {
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 12,
            height: 12,
            borderRadius: 6,
            borderWidth: 2,
            borderColor: theme.colors.surface,
        },
        contentContainer: {
            flex: 1,
            justifyContent: 'center',
        },
        userName: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.colors.text.primary,
            marginBottom: 4,
        },
        message: {
            fontSize: 14,
            color: theme.colors.text.secondary,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <View style={styles.avatarContainer}>
                    <Image 
                        source={avatar}
                        style={styles.avatar}
                    />
                    <View style={[styles.onlineIndicator, { backgroundColor: getStatusColor() }]} />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
            </View>
        </View>
    );
};


export default PinComponent;

