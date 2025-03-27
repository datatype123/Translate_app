import React from "react";
import { View, Text, StyleSheet,Image, ImageSourcePropType } from "react-native";
import { useAppSelector } from "../../store/store";
import { LightTheme, DarkTheme } from "../../config/Theme";

interface UserFrameChatProps {
    content: string;
    type: "user" | "assistant";
}

const UserFrameChat = ({  content,type}: UserFrameChatProps) => {
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === 'light' ? LightTheme : DarkTheme;

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            backgroundColor: theme.colors.background,
        },
        avatar: {
            width: 40,
            height: 40,
            borderRadius: 100,
        },
        name: {
            fontSize: 16,
            fontWeight: "bold",
        },
        time: {
            fontSize: 12,
            color: "gray",
        },
        content: {
            fontSize: 16,
            color: "black",
        },
        userContainer: {
            alignContent:'flex-start',
            backgroundColor: theme.colors.userContainer,
        },
        assistantContainer: {
            alignContent: "flex-end",
            backgroundColor: theme.colors.assistantContainer,
        },
        userContent: {
            color: theme.colors.text.user,
            backgroundColor: theme.colors.userContent,
            justifyContent: "flex-start",
        },
        assistantContent: {
            color: theme.colors.text.assistant,
            backgroundColor: theme.colors.assistantContent,
            justifyContent: "flex-start",
        },
    });
    return (
       type === "user" ? (
        <View style={styles.userContainer}>
            <Image source={require('../../assets/icon/account.png')} style={styles.avatar} />
            <Text style={styles.userContent}>{content}</Text>
        </View>
       ) : (
        <View style={styles.assistantContainer}>
            <Image source={require('../../assets/icon/translate.png')} style={styles.avatar} />
            <Text style={styles.assistantContent}>{content}</Text>
        </View>
       )
    )
}

export default UserFrameChat;