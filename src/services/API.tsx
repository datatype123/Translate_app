import React from "react";
import axios from "axios";
import { config } from "../../config.app";
import Toast from 'react-native-toast-message';

const api = axios.create({
    baseURL: config.auth.baseURL || "http://localhost:3000", // Giá trị mặc định nếu config không có
    // timeout: 10000, // Timeout 10 giây để tránh treo request
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });



  const data = (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("Email and password are required");
      console.log("Email and password are required");
    }
    return {
      "email": email.trim(),  
      "password": password,
    };
  };


const toast = (type: string, text1: string, text2: string) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
  });
};

export const registerNewUser = async (email: string, password: string) => {
    try {
      const response = await api.post(config.auth.pathSignup, data(email, password));
      return response.data;
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || "Registration failed";
      } else if (error) {
        errorMessage = "No response from server";
      } else {
        errorMessage = "Sorry, something went wrong";
      }
      toast("error", "Registration Error", errorMessage);
      throw error;
    }
  };


export  const loginUser = async (email: string, password: string) => {
    try {
      const response = await api.post(config.auth.pathSignin, 
        data(email, password));
      return response.data;
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || "Login failed";
      } else if (error) {
        errorMessage = "No response from server";
      } else {
        errorMessage = "Sorry, something went wrong";
      }
      toast("error", "Login Error", errorMessage);
      throw error;
    }
  };


export  const getInformationUser = async (token: string) => {
    try {
      const response = await api.get(config.auth.pathGetInformation, {
        headers: {
          Authorization: `Bearer ${token}`,
        },  
      });
      return response.data;
    } catch (error) {
      console.error("Error getting information user:", error);
      throw error;
    }
  };



