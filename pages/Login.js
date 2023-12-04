import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
// import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <ScrollView
      className="h-full w-full flex-1 bg-white"
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="flex-1 w-full h-full justify-center">
        <View className="flex flex-col items-center gap-5 p-8 w-full h-full justify-center">
          <View className="text-center flex items-center">
            <Image
              source={require("../assets/logo.png")}
              className="w-20 h-20"
            />
            <Text className="text-3xl font-black text-gray-800">Login</Text>
            <Text className="text-sm text-gray-500 font-semibold">
              Login to your account.
            </Text>
          </View>

          <View className="w-full">
            <View className="w-full bg-gray-100 p-2 px-4 rounded-xl mb-4">
              <Text className="text-gray-400 text-xs">Email</Text>
              <TextInput
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="johndoe@example.com"
                placeholderTextColor="rgb(156 163 175)"
              />
            </View>

            <View className="w-full bg-gray-100 p-2 px-4 rounded-xl mb-4">
              <Text className="text-gray-400 text-xs">Password</Text>
              <TextInput
                secureTextEntry={true}
                textContentType={"password"}
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="pass1234"
                placeholderTextColor="rgb(156 163 175)"
              />
              <View className="absolute right-4 top-5 bg-gray-100">
                <Feather name="eye" size={24} color="rgb(156 163 175)" />
              </View>
            </View>

            <View className="w-full mb-3">
              <TouchableOpacity className="flex items-center justify-center bg-nft-primary-light rounded-xl p-4">
                <Text className="text-white text-lg font-semibold">
                  Register
                </Text>
              </TouchableOpacity>
            </View>

            <View className="w-3/4 mx-auto">
              <Text className="text-gray-400 text-xs text-center">
                By signing in, you agree to our Terms of Use and Privacy Policy.
              </Text>
            </View>

            <View className="flex-row justify-center mt-7">
              <Text className="text-sm text-gray-500 font-semibold">
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text className="font-semibold text-nft-primary-light">
                  {" "}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
