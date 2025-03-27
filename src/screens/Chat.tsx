import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image, SafeAreaView } from "react-native";
import { useAppSelector } from "../store/hooks";
import { LightTheme, DarkTheme } from "../config/Theme";
import { useNavigation } from "@react-navigation/native";
import UserFrameChat from "../components/layout/UserFrameChat";
const Chat = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentTheme === "light" ? LightTheme : DarkTheme;
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    header:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal:20,
        paddingVertical: 20,
        gap:30,
    },
    backButton: {
        width: 24,
        height: 24,
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'transparent',
    },
    backButtonIcon: {
        width: 24,
        height: 24,
        padding: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: theme.colors.text.primary,
        marginTop:12
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/icon/back.png')} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Title translate</Text>
      </View>
      <UserFrameChat name="John Doe" avatar={require('../assets/icon/account.png')} time="12:00" isOnline={true} />
    </SafeAreaView>
  );
};

export default Chat;
