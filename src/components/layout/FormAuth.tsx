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
import Login from "../ui/LoginScreen";
import Signup from "../ui/SignupScreen";

interface FormAuthProps {
  onSubmit: (email: string, password: string) => void;
}



const FormAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const [form, setForm] = useState(<Login />);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      backgroundColor: "transparent",
      marginBottom: 300,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <SwitchComponent
        isLogin={isLogin}
        setIsLogin={() => {
          setIsLogin(true);
          setForm(<Signup />);
        }}
        isSignup={false}
        setSignup={() => {
          setIsLogin(false);
          setForm(<Login />);
        }}
      />
      {form}
    </SafeAreaView>
  );
};

export default FormAuth;
