import React from "react";
import axios from "axios";
import { config } from "../../config.app";
import Toast from "react-native-toast-message";
import { storeData, getData } from "./LocalStorage";

const api = axios.create({
  baseURL: config.auth.baseURL,
});

const data = (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }
  return {
    email: email,
    password: password,
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
    const response = await api.post(
      config.auth.pathSignup,
      data(email, password)
    );
    toast("success", "Registration Success", "Welcome!");
    return response.data;
  } catch (error) {
    let errorMessage = "An unexpected error occurred";
    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data.message || "Registration failed";
      toast("error", "Registration Error", errorMessage);
    } else if (error) {
      errorMessage = "No response from server";
      toast("error", "Registration Error", errorMessage);
    } else {
      errorMessage = "Sorry, something went wrong";
      toast("error", "Registration Error", errorMessage);
    }
    toast("error", "Registration Error", errorMessage);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post(
      config.auth.pathSignin,
      data(email, password)
    );
    toast("success", "Login Success", "Welcome back!");
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);

    let errorMessage = "An unexpected error occurred";
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log("Response Error:", error.response.data);
        errorMessage = error.response.data.message || "Login failed";
      } else {
        console.log("No response from server");
        errorMessage = "No response from server";
      }
    } else {
      console.log("Something went wrong");
      errorMessage = "Sorry, something went wrong";
    }

    toast("error", "Login Error", errorMessage);
    throw error;
  }
};

export const getInformationUser = async () => {
  try {
    const token = getData("access_token");
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
