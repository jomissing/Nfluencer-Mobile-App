import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./redux/AuthContext";
// import { APP_API_URL } from "@env";
import Constants from "expo-constants";

export default function Inbox() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const { userDetails, setUserDetails, clearUserDetails } = useAuth();
  const APP_API_URL = Constants.manifest.extra.APP_API_URL;

  useEffect(() => {
    if (!userDetails) {
      navigation.navigate("Login");
    }
  }, [userDetails]);

  const fetchUsers = async () => {
    const res = await fetch(`${APP_API_URL}/api/user/chatUsers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userDetails.jwtToken,
      },
      body: JSON.stringify({ username: userDetails.username }),
    });
    const data = await res.json();
    if (data.error) {
      setUsers([]);
      return;
    }
    setUsers(data.users);
    console.log(data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, [userDetails]);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const goToChat = (user) => {
    navigation.navigate("Chat", { user });
  };

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
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {/* User List */}
      <ScrollView>
        {filteredUsers.map((user) => (
          <TouchableOpacity
            key={user._id}
            onPress={() => goToChat(user)}
            className="flex flex-row items-center border-b border-gray-50 p-4 gap-4 py-4"
          >
            <View className="relative">
              <Image
                source={{ uri: user.avatar }}
                className="object-cover opacity-90 w-14 h-14 rounded-full"
              />
              <View className="absolute bottom-0 right-1 w-3 h-3 bg-green-600 border border-gray-50 rounded-full" />
            </View>
            <View className="flex-1 items-start">
              <Text className="text-base font-bold text-gray-800">
                {user.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
