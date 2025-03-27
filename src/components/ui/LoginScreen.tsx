import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useAppSelector } from "../../store/hooks";
import { LightTheme, DarkTheme } from "../../config/Theme";
import SwitchComponent from "../ui/SwitchComponent";
import { registerNewUser, loginUser } from "../../services/API";


const handleLogin = async (email: string, password: string) => {
    console.log("handleLogin called with:", email, password);
    const response = await loginUser(email, password);
    console.log(response);
};


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === "light" ? LightTheme : DarkTheme;
  
    const styles = StyleSheet.create({
      container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
      },
      login: {
        width: "100%",
        marginBottom: 20,
      },
      title: {
        fontSize: 16,
        fontWeight: "600",
        color: theme.colors.text.primary,
        marginBottom: 8,
      },
      input: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        borderColor: theme.colors.border,
        fontSize: 16,
        color: theme.colors.text.secondary,
      },
      sub_button: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
      },
      forgot_password: {
        fontSize: 14,
        color: theme.colors.text.secondary,
        opacity: 0.7,
      },
      send_recovery_otp: {
        fontSize: 14,
        fontWeight: "600",
        color: theme.colors.primary,
      },
      login_button: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      login_button_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
      },
    });
  
    return (
      <View style={styles.container}>
        <View style={styles.login}>
          <Text style={styles.title}>Your email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={theme.colors.text.secondary}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.login}>
          <Text style={styles.title}>Your password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.text.secondary}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.sub_button}>
          <TouchableOpacity>
            <Text style={styles.forgot_password}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.send_recovery_otp}>Send recovery OTP</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.login_button} onPress={() => handleLogin(email, password)}>
          <Text style={styles.login_button_text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default Login;
