import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useAppSelector } from "../../store/hooks";
import { LightTheme, DarkTheme } from "../../config/Theme";
import SwitchComponent from "../ui/SwitchComponent";

const Signup = () => {
    return (
        <View>
            <Text>Signup</Text>
        </View>
    );
};

export default Signup;
