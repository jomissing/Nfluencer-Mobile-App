import React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const usersData = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "Hello there!",
    lastSentTime: "2h ago",
    image: require("../assets/me.jpeg"), // Replace with actual image source
  },
  {
    id: 2,
    name: "Michael Collins",
    lastMessage: "I am Jane from the block",
    lastSentTime: "2d ago",
    image: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 3,
    name: "Sarah Jane",
    lastMessage: "How are you doing?",
    lastSentTime: "2h ago",
    image: require("../assets/user3.png"), // Replace with actual image source
  },
  {
    id: 4,
    name: "Amanda Doe",
    lastMessage: "Nice to meet you!",
    lastSentTime: "2h ago",
    image: require("../assets/user4.png"), // Replace with actual image source
  },
  {
    id: 5,
    name: "Bob Doe",
    lastMessage: "I want to buy your NFT",
    lastSentTime: "2h ago",
    image: require("../assets/user5.png"), // Replace with actual image source
  },
  {
    id: 6,
    name: "Michael Collins",
    lastMessage: "Is this still available?",
    lastSentTime: "2h ago",
    image: require("../assets/user3.png"), // Replace with actual image source
  },
];

export default function Inbox({ navigation }) {
  return (
    <View className="flex-1 bg-white pt-7">
      {/* Top Bar */}
      <View className="flex flex-row justify-between items-center p-4 pb-0">
        <Text className="text-2xl font-bold text-gray-800">Inbox</Text>
        <TouchableOpacity onPress={() => console.log("Sorting icon pressed")}>
          <AntDesign name="filter" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="p-4">
        <TextInput
          className=" text-gray-800 text-base font-normal p-3 bg-gray-100 rounded-lg"
          placeholder="Search for a user"
          placeholderTextColor="rgb(156 163 175)"
        />
      </View>

      {/* User List */}
      <ScrollView>
        {usersData.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => console.log(`User ${user.name} pressed`)}
            className="flex flex-row items-center border-b border-gray-50 p-4 gap-4 py-4"
          >
            <View className="relative">
              <Image
                source={user.image}
                className="object-cover opacity-90 w-14 h-14 rounded-full"
              />
              <View className="absolute bottom-0 right-1 w-3 h-3 bg-green-600 border border-gray-50 rounded-full" />
            </View>
            <View className="flex-1 items-start">
              <Text className="text-base font-bold text-gray-800">
                {user.name}
              </Text>
              <Text className="text-gray-500">{user.lastMessage}</Text>
            </View>
            <Text className="text-gray-400">{user.lastSentTime}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
