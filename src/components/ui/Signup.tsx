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
import { useNavigation, useTheme } from "@react-navigation/native";
import { useAppSelector } from "../../store/hooks";
import { LightTheme, DarkTheme } from "../../config/Theme";
import SwitchComponent from "./SwitchComponent";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { loginUser, registerNewUser } from "../../services/API";
import Toast from "react-native-toast-message";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const theme = currentTheme === "light" ? LightTheme : DarkTheme;
  const navigation = useNavigation();


  const toast = (type: string, text1: string, text2: string) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
    });}

  const handleRegister = async () => {
    handleConfirmPassword(password, confirmPassword)
    const response = await registerNewUser(email, password);
    toast("success", "Please check your email to verify account", "Welcome!");
    navigation.navigate("MainTabs");
    console.log(response.data.token);
  };


  const handleConfirmPassword = (password:string, confirmPassword:string) => {
    if (!password || !confirmPassword) {
        toast("error", "Password Error", "Both fields are required.");
      return { success: false, message: "Both fields are required." };
    }
    
    if (password !== confirmPassword) {
        toast("error", "Password Error", "Passwords do not match.");
      return { success: false, message: "Passwords do not match." };
    }
    
    if (password.length < 6) {
        toast("error", "Password Error", "Password must be at least 6 characters long.");
      return { success: false, message: "Password must be at least 6 characters long." };
    }
    
    toast("success", "Password Success", "Passwords match.");
    return { success: true, message: "Passwords match." };
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
      backgroundColor: theme.colors.background,
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
    signupText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
    loginText: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.primary,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.innerContainer}>
        <Text style={styles.title}>Register new user</Text>
        <Text style={styles.subtitle}>Sign Up to continue</Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={20}
            color={theme.colors.text.primary}
            style={styles.icon}
          />
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
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={theme.colors.text.primary}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.text.secondary}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color={theme.colors.text.secondary}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={theme.colors.text.primary}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password "
            placeholderTextColor={theme.colors.text.secondary}
            secureTextEntry={!showConfirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color={theme.colors.text.secondary}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={["#6a11cb", "#2575fc"]}
          style={styles.loginButton}
        >
          <TouchableOpacity onPress={handleRegister} style={styles.buttonContent}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.inputContainer}>
          <Text>You have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
  };

export default Signup;
