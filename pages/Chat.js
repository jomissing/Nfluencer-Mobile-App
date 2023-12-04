import React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const messagesData = [
  {
    id: 1,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message: "Hello there!",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 2,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 1,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message: "Hello there!",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 2,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 1,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message: "Hello there!",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 2,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 1,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message: "Hello there!",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 2,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 1,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message: "Hello there!",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 2,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 1,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message: "Hello there!",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 2,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 1,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message: "Hello there!",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  {
    id: 2,
    userId: 2,
    userName: "Michael Collins",
    time: "2d ago",
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    userImage: require("../assets/user2.png"), // Replace with actual image source
  },
  // Add more messages as needed
];

export default function Chat({ navigation }) {
  return (
    <View className="flex-1 bg-white pt-7">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center px-4">
        <View className="flex-1 flex-row items-center justify-start">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>

          <View className="flex flex-col justify-start px-4">
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
              Michael Collins
            </Text>
            <Text style={{ fontSize: 12, color: "#999" }}>
              Last seen 2d ago
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => console.log("Options pressed")}>
            <Feather name="more-vertical" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Area */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
        {messagesData.map((message) => (
          <View
            key={message.id}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginVertical: 8,
            }}
          >
            <Image
              source={message.userImage}
              style={{
                width: 35,
                height: 35,
                borderRadius: 20,
                marginRight: 5,
              }}
            />
            <View style={{ flex: 1 }}>
              <View className="flex-1 flex-row items-center gap-4">
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#333" }}
                >
                  {message.userName}
                </Text>
                <Text style={{ color: "#999" }}>{message.time}</Text>
              </View>
              <Text>{message.message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Message Input Area */}
      <View className="flex-row justify-between items-center px-0 py-2 pb-0 pt-0 flex">
        <TextInput
          className="flex-1 h-auto border-t border-t-gray-100 p-4 pt-2 pb-2"
          placeholder="Type a message..."
          textAlignVertical="top"
          multiline={true}
          placeholderTextColor="#ccc"
        />
      </View>

      {/* Create Order and Attachment Buttons */}
      <View className="flex-row justify-between items-center px-4 py-2 pt-0">
        <View className="flex-1 flex-row gap-4 items-center">
          <TouchableOpacity onPress={() => console.log("Attachment pressed")}>
            <Feather name="paperclip" size={24} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("Create Order pressed")}>
            <Text className="text-[#999] font-bold">Create Order</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => console.log("Create Order pressed")}
          className=" p-2 rounded-md px-4"
        >
          <Text className="text-nft-primary-light font-bold">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
