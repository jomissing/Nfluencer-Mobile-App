import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./redux/AuthContext";
import { io } from "socket.io-client";
// import { APP_API_URL } from "@env";
import Constants from "expo-constants";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDarkMode } from "../pages/redux/DarkModeContext";
import { Alert } from "react-native";

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

export default function Chat() {
  const navigation = useNavigation();
  const APP_API_URL = Constants.manifest.extra.APP_API_URL;
  const route = useRoute();
  const { user } = route.params;
  const { userDetails, setUserDetails, clearUserDetails } = useAuth();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const selectedUser = user;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    const socket = io(APP_API_URL);
    setSocket(socket);
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("user-disconnected", async (disconnectedUserId) => {
      fetchChatId(userDetails._id, selectedUser._id)
        .then(async (data) => {
          setSelectedChatId(data);
          await fetchChatHistory(data);
        })
        .catch((error) => {
          console.error("Error fetching chat ID:", error);
        });
    });
  }, [selectedUser, userDetails]);

  const fetchChatHistory = async (chatId) => {
    try {
      const response = await fetch(`${APP_API_URL}/api/message/chat-history`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userDetails.jwtToken,
        },
        body: JSON.stringify({
          sender: userDetails._id,
          receiver: selectedUser._id,
          chatId,
        }),
      });
      const data = await response.json();
      if (data.error) {
        setMessages([]);
        return;
      }
      setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const fetchChatId = async (senderId, receiverId) => {
    try {
      const response = await fetch(`${APP_API_URL}/api/message/fetch-chat-id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userDetails.jwtToken,
        },
        body: JSON.stringify({
          senderId,
          receiverId,
        }),
      });

      const data = await response.json();
      return data.chatId;
    } catch (error) {
      console.error("Error fetching chat ID:", error);
      return null;
    }
  };

  useEffect(() => {
    if (userDetails && selectedUser) {
      fetchChatId(userDetails._id, selectedUser._id)
        .then(async (data) => {
          setSelectedChatId(data);
          await fetchChatHistory(data);
        })
        .catch((error) => {
          console.error("Error fetching chat ID:", error);
        });
    }
  }, [userDetails, selectedUser]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    socket.emit("message", {
      text: newMessage,
      sender: userDetails._id,
      receiver: selectedUser._id,
      chatId: selectedChatId,
      socketId: socket.id,
      avatar: userDetails.avatar,
    });

    setNewMessage("");
  };

  function formatDate(dateStr) {
    const dateObj = new Date(dateStr);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formattedDate;
  }

  const handleComingSoon = () => {
    // show alert that its coming soon
    Alert.alert(
      "Coming Soon",
      "This feature is coming soon. Stay tuned!",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      className="bg-white dark:bg-nft-primary-light"
    >
      <View className="flex-1 bg-white dark:bg-[#24293e]">
        {/* Top Bar */}
        <View className="flex-row justify-between items-center px-4 pt-0 bg-nft-primary-light">
          <View className="flex-1 flex-row items-center justify-start py-3">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>

            <View className="flex flex-col justify-start px-4">
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                {selectedUser.name}
              </Text>
              <Text style={{ fontSize: 12, color: "#fff" }}>
                Last seen 2d ago
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity onPress={handleComingSoon}>
              <Feather name="more-vertical" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Chat Area */}
        <ScrollView style={{ flex: 1, paddingHorizontal: 16, marginTop: 0 }}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginVertical: 8,
              }}
            >
              <Image
                source={{
                  uri:
                    userDetails._id === message.receiver
                      ? selectedUser.avatar
                      : userDetails.avatar,
                }}
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
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: isDarkMode ? "#fff" : "#333",
                    }}
                  >
                    {userDetails._id === message.receiver
                      ? selectedUser.username
                      : userDetails.username}
                  </Text>
                  <Text
                    style={{
                      color: isDarkMode ? "rgba(156, 163, 175, 1)" : "#999",
                    }}
                  >
                    {formatDate(message.createdAt)}
                  </Text>
                </View>
                <Text className="text-gray-800 dark:text-gray-400">
                  {message.text}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Message Input Area */}
        <View className="flex-row justify-between items-center py-4 px-2 flex border-t border-t-gray-100 bg-gray-50 shadow-lg dark:bg-gray-700 dark:border-t-gray-600">
          <TextInput
            className="flex-1 h-auto max-h-28 font-semibold"
            placeholder="Type a message..."
            textAlignVertical="top"
            multiline={true}
            placeholderTextColor="#aaa"
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
          />
          <TouchableOpacity onPress={sendMessage} className="rounded-xl">
            <Ionicons name="send" size={24} color="#9375f5" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
