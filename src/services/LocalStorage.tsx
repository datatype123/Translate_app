import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeData = async (key:string,value:string) =>{
    try{
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key,jsonValue);
        console.log('data store done');
    }catch(error){
        console.error(error);
        throw error;
    }
}


export const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error("Error reading data:", error);
    }
  };


export  const removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Data removed successfully!");
    } catch (error) {
      console.error("Error removing data:", error);
    }
  };
  
  