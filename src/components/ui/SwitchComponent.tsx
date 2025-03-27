import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button,Divider,Icon } from "react-native-paper";
import { useAppSelector } from "../../store/hooks";
import { LightTheme, DarkTheme } from "../../config/Theme";
const SwitchComponent = ({isLogin,setIsLogin,isSignup,setSignup}:{isLogin:boolean,setIsLogin:any,isSignup:boolean,setSignup:any}) => {
    const currentTheme = useAppSelector((state) => state.theme.currentTheme);
    const theme = currentTheme === "light" ? LightTheme : DarkTheme;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      gap: 10,
      padding: 40,
    },
    signup: {
      width: "50%", 
      height: 50,
      borderRadius: 10,
      backgroundColor:"transparent",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
    },
    login: {
      width: "50%",
      height: 50,
      borderRadius: 10,
      backgroundColor:"transparent",
      justifyContent:"center",
      alignItems:"center",
    },
    button: {
      backgroundColor: "transparent",
      justifyContent:"center",
    //   alignItems:"center",
    },
    content: {
      backgroundColor: "transparent",
      justifyContent:"center",
      alignItems:"center",
    },
    text_signup: {
        color: isLogin ? theme.colors.primary : "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign:"center",
        padding:10,
    },
    text_login: {
        color: isSignup ? theme.colors.primary : "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign:"center",
        padding:10,
    },
    divider_login: {
        backgroundColor: isSignup ? theme.colors.primary : "black",
        width: "200%",
        height: 1,
    },
    divider_signup: {
        backgroundColor: isLogin ? theme.colors.primary : "black",
        width: "200%",
        height: 1,
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.signup}>
        <TouchableOpacity style={styles.button} onPress={() => {setSignup(false);setIsLogin(true)}}>
          <View style={styles.content}>
                <Text style={styles.text_signup}>Signup</Text>
            <Divider style={styles.divider_signup}></Divider>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
      <TouchableOpacity style={styles.button} onPress={() => {setIsLogin(false);setSignup(true)}}>
          <View style={styles.content}>
            <Text style={styles.text_login}>Login</Text>
            <Divider style={styles.divider_login}></Divider>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwitchComponent;
