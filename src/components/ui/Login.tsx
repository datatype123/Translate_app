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
import { useTheme, useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../../store/hooks";
import { LightTheme, DarkTheme } from "../../config/Theme";
import { registerNewUser, loginUser } from "../../services/API";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { storeData } from "../../services/LocalStorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentTheme === "light" ? LightTheme : DarkTheme;
  const navigation = useNavigation();

  const handleLogin = async () => {
    const response = await loginUser(email, password);
    storeData("access_token", response.data.token);
    navigation.navigate("MainTabs");
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      // height: "100%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    innerContainer: {
      width: "100%",
      padding: 20,
      borderRadius: 15,
      backgroundColor:theme.colors.background
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 16,
      color: "gray",
      textAlign: "center",
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: "#fff",
    },
    input: {
      flex: 1,
      height: 50,
      fontSize: 16,
      color: "#333",
    },
    icon: {
      marginRight: 10,
    },
    eyeIcon: {
      marginLeft: 10,
    },
    forgotPassword: {
      fontSize: 14,
      color: "#2575fc",
      textAlign: "right",
      marginBottom: 20,
    },
    loginButton: {
      borderRadius: 10,
      paddingVertical: 12,
      alignItems: "center",
    },
    buttonContent: {
      width: "100%",
      alignItems: "center",
    },
    loginText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.innerContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color={theme.colors.text.primary} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={theme.colors.text.secondary}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color={theme.colors.text.primary} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.text.secondary}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color={theme.colors.text.secondary} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <LinearGradient colors={["#6a11cb", "#2575fc"]} style={styles.loginButton}>
          <TouchableOpacity onPress={handleLogin} style={styles.buttonContent}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};



export default Login;
