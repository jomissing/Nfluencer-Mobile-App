import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "./redux/AuthContext";
import { useNavigation } from "@react-navigation/native";

function Settings() {
  const { userDetails, setUserDetails, clearUserDetails } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    clearUserDetails();
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Text} onPress={handleLogout}>
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1117",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "#9d9d9d",
  },
});
