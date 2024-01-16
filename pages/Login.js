import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Linking,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { APP_API_URL } from "@env";
import Constants from "expo-constants";
import { useAuth } from "./redux/AuthContext";

export default function Login() {
  const APP_API_URL = Constants.manifest.extra.APP_API_URL;
  const [email, setEmail] = useState("joharkhan@mailsac.com");
  const [password, setPassword] = useState("joharkhan@mailsac.com");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasError, setHasError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { userDetails, setUserDetails, clearUserDetails } = useAuth();
  const navigation = useNavigation();

  // clear all states on unmount
  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
      setErrorMessage("");
      setHasError(false);
      setShowPassword(false);
      setIsSubmitting(false);
    };
  }, []);

  // redirect to main if user is already logged in
  useEffect(() => {
    if (userDetails) {
      navigation.navigate("Main");
    }
  }, [userDetails]);

  const handeLogin = async () => {
    setIsSubmitting(true);

    if (!email || !password) {
      setHasError(true);
      setErrorMessage("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    // "usamamuhammad@mailsac.com";
    // setErrorMessage("");
    // setHasError(false);
    try {
      await fetch(`${APP_API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error && data.error == true) {
            setHasError(true);
            setErrorMessage(data.message);
            return;
          }

          if (data.token) {
            setErrorMessage("");
            setHasError(false);
            setUserDetails(data.user);
            navigation.navigate("Main");
          }
        });
    } catch (error) {
      console.log("object", error);
    }

    setIsSubmitting(false);
  };

  const handleLinkPress = (url) => {
    const externalLink = url;
    Linking.openURL(externalLink);
  };

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
            <View
              className={`w-full bg-gray-100 p-2 px-4 rounded-xl mb-4 border-2 ${
                hasError ? "border-red-700" : "border-gray-300"
              }`}
            >
              <Text
                className={`text-xs ${
                  hasError ? "text-red-700" : "text-gray-400"
                }`}
              >
                Email
              </Text>
              <TextInput
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="johndoe@example.com"
                placeholderTextColor="rgb(156 163 175)"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>

            <View
              className={`w-full bg-gray-100 p-2 px-4 rounded-xl mb-4 border-2 ${
                hasError ? "border-red-700" : "border-gray-300"
              }`}
            >
              <Text
                className={`text-xs ${
                  hasError ? "text-red-700" : "text-gray-400"
                }`}
              >
                Password
              </Text>
              <TextInput
                secureTextEntry={!showPassword}
                textContentType={"password"}
                className=" placeholder:text-gray-400 text-gray-800 text-base font-semibold"
                placeholder="pass1234"
                placeholderTextColor="rgb(156 163 175)"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <TouchableOpacity
                className="absolute right-4 top-5 bg-gray-100"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Feather name="eye" size={24} color="rgb(156 163 175)" />
              </TouchableOpacity>
            </View>

            {hasError && (
              <Text className="text-red-700 text-sm mb-2">{errorMessage}</Text>
            )}

            <View className="w-full mb-3">
              <TouchableOpacity
                className="flex items-center justify-center bg-nft-primary-light rounded-xl p-4"
                onPress={handeLogin}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <View>
                    <Text className="text-white text-lg font-semibold">
                      ...
                    </Text>
                  </View>
                ) : (
                  <View className="flex flex-row items-center gap-2">
                    <Text className="text-white text-lg font-semibold">
                      Login
                    </Text>
                    <Feather name="log-in" size={24} color="white" />
                  </View>
                )}
              </TouchableOpacity>
            </View>

            <View className="w-3/4 mx-auto">
              <View className="flex items-center text-center">
                <Text className="text-gray-400 text-xs">
                  By signing in, you agree to our
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    handleLinkPress(
                      "https://nfluencer-website.vercel.app/terms-and-conditions"
                    )
                  }
                  className="inline"
                >
                  <Text className="text-xs text-nft-primary-light">
                    Terms and Conditions of Use.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-col justify-center w-full items-center mt-7">
              <Text className="text-sm text-gray-500 font-semibold block">
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() =>
                  handleLinkPress("https://nfluencer-website.vercel.app/signup")
                }
              >
                <Text className="font-semibold text-nft-primary-light">
                  {" "}
                  Sign Up on NFLUENCER Website
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
