import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useAppSelector } from "../../store/hooks";
import { LightTheme, DarkTheme } from "../../config/Theme";
import Login from "../ui/Login";
import Signup from "../ui/Signup";

const FormAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: currentTheme === "light" ? "#fff" : "#1e1e1e",
    },
    switchContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop:40
      // marginBottom: 20,
    },
    switchButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginHorizontal: 5,
    },
    switchText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#888",
    },
    activeSwitch: {
      borderBottomWidth: 2,
      borderBottomColor: "#2575fc",
    },
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchButton, isLogin && styles.activeSwitch]}
          onPress={() => setIsLogin(true)}
        >
          <Text style={[styles.switchText, isLogin && { color: "#2575fc" }]}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.switchButton, !isLogin && styles.activeSwitch]}
          onPress={() => setIsLogin(false)}
        >
          <Text style={[styles.switchText, !isLogin && { color: "#2575fc" }]}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {isLogin ? <Login /> : <Signup />}
    </KeyboardAvoidingView>
  );
};

export default FormAuth;
