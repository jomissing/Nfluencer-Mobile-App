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

export default function UserDetails({ navigation }) {
  return (
    <ScrollView
      className="h-full w-full flex-1 bg-white"
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View className="flex-1 w-full h-full justify-center">
        <View className="flex flex-col items-center gap-5 p-8 w-full h-full justify-center">
          <View className="text-center flex items-center">
            <Text className="text-3xl font-black text-gray-800">
              Submit Your Details
            </Text>
            <Text className="text-sm text-gray-500 font-semibold">
              Please enter your details.
            </Text>
          </View>

          <View className="w-full">
            <View className="w-full bg-gray-100 p-2 px-4 rounded-xl mb-4">
              <Text className="text-gray-400 text-xs">Fullname</Text>
              <TextInput
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="John Doe"
                placeholderTextColor="rgb(156 163 175)"
              />
            </View>

            <View className="w-full bg-gray-100 p-2 px-4 rounded-xl mb-4">
              <Text className="text-gray-400 text-xs">Username</Text>
              <TextInput
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="johndoe123"
                placeholderTextColor="rgb(156 163 175)"
              />
            </View>

            <View className="w-full bg-gray-100 p-2 px-4 rounded-xl mb-4">
              <Text className="text-gray-400 text-xs">Languages</Text>
              <TextInput
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="English, Spanish, French"
                placeholderTextColor="rgb(156 163 175)"
              />
            </View>

            <View className="w-full bg-gray-100 p-2 px-4 rounded-xl mb-4">
              <Text className="text-gray-400 text-xs">Bio</Text>
              <TextInput
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="I am a developer from the United States..."
                placeholderTextColor="rgb(156 163 175)"
                multiline={true}
                numberOfLines={5}
                textAlignVertical="top"
              />
            </View>

            <View className="w-full mb-3">
              <TouchableOpacity
                className="flex items-center justify-center bg-nft-primary-light rounded-xl p-4"
                onPress={() => navigation.navigate("Main")}
              >
                <Text className="text-white text-lg font-semibold">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
