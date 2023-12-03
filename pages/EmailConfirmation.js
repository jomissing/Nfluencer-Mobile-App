import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

export default function EmailConfirmation({ navigation }) {
  return (
    <ScrollView
      className="h-full w-full flex-1 bg-white"
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="flex-1 w-full h-full justify-center">
        <View className="flex flex-col items-center gap-5 p-8 w-full h-full justify-center">
          <View className="text-center flex items-center">
            <Image
              source={require("../assets/confirm.jpg")}
              className="object-contain opacity-90 w-40 h-40"
            />
            <Text className="text-3xl font-black text-gray-800">
              Email Confirmation
            </Text>
            <Text className="text-sm text-gray-500 font-semibold text-center">
              We have sent a confirmation code to you at
            </Text>
            <Text className="font-bold text-gray-600">test@gamicl.com</Text>
            <Text className="text-sm text-gray-500 font-semibold text-center">
              Please enter the code below.
            </Text>
          </View>

          <View className="w-full">
            <View className="w-full mb-4">
              {/* <Text className="text-gray-400 text-xs">Fullname</Text> */}
              <TextInput
                className=" text-gray-800 text-2xl font-black text-center p-4 bg-gray-100 rounded-xl"
                placeholder="12345"
                placeholderTextColor="rgb(156 163 175)"
              />
            </View>

            <View className="w-full mb-3">
              <TouchableOpacity
                className="flex items-center justify-center bg-nft-primary-light rounded-xl p-4"
                onPress={() => navigation.navigate("UserDetails")}
              >
                <Text className="text-white text-lg font-semibold">Verify</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
