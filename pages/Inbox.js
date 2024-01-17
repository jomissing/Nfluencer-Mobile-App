import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./redux/AuthContext";
// import { APP_API_URL } from "@env";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDarkMode } from "../pages/redux/DarkModeContext";

export default function Inbox() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const { userDetails, setUserDetails, clearUserDetails } = useAuth();
  const APP_API_URL = Constants.manifest.extra.APP_API_URL;
  const { isDarkMode, toggleDarkMode } = useDarkMode();

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
      body: JSON.stringify({ userid: userDetails._id }),
    });
    const data = await res.json();
    if (data.error) {
      setUsers([]);
      return;
    }
    setUsers(data.users);
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
    <SafeAreaView style={{ flex: 1 }} className="bg-white dark:bg-[#24293e]">
      <View className="flex-1 bg-white dark:bg-[#24293e]">
        {/* Top Bar */}
        <View className="flex flex-row justify-between items-center p-4 pb-0 pt-0">
          <Text className="text-2xl font-bold text-gray-800 dark:text-white">
            Inbox
          </Text>
          <TouchableOpacity onPress={handleComingSoon}>
            <AntDesign
              name="filter"
              size={24}
              color={isDarkMode ? "#fff" : "#333"}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="p-4">
          <TextInput
            className=" text-gray-800 text-base font-normal p-3 bg-gray-100 rounded-lg dark:text-white dark:bg-gray-500"
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
              className="flex flex-row items-center border-b border-gray-50 p-4 gap-4 py-4 dark:border-gray-600"
            >
              <View className="relative">
                <Image
                  source={{ uri: user.avatar }}
                  className="object-cover opacity-90 w-14 h-14 rounded-full"
                />
                <View className="absolute bottom-0 right-1 w-3 h-3 bg-green-600 border border-gray-50 rounded-full" />
              </View>
              <View className="flex-1 items-start">
                <Text className="text-base font-bold text-gray-800 dark:text-white">
                  {user.name}
                </Text>
                <Text className="text-xs font-normal text-gray-400">
                  @{user.username}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
