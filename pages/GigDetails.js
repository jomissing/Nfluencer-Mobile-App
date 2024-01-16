import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
// import { APP_API_URL } from "@env";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { useDarkMode } from "../pages/redux/DarkModeContext";

export default function GigDetails() {
  const navigation = useNavigation();
  const APP_API_URL = Constants.manifest.extra.APP_API_URL;
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const route = useRoute();
  const { gig_id } = route.params;
  const [gig, setGig] = useState(null);

  const fetchGigDetails = async () => {
    const req = await fetch(`${APP_API_URL}/api/gig/details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gigId: gig_id,
      }),
    });
    const res = await req.json();
    setGig(res[0]);
    // console.log(res[0].faqs);
  };

  useEffect(() => {
    if (gig_id) fetchGigDetails();
  }, [gig_id]);

  const [gigReviews, setGigReviews] = useState([]);
  const getGigReviews = async () => {
    try {
      const req = await fetch(
        `${APP_API_URL}/api/gig/getGigReviews/${gig_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await req.json();
      setGigReviews(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (gig_id) {
      getGigReviews();
    }
  }, [gig_id]);

  const webViewRef = useRef(null);
  const [webViewHeight, setWebViewHeight] = useState(200);

  const onMessage = (event) => {
    // Parse the height information from the web page
    const height = parseFloat(event.nativeEvent.data);

    // Update the WebView height
    setWebViewHeight(height);
  };

  if (!gig)
    return (
      <View className="flex-1 items-center justify-center dark:bg-[#24293e]">
        <Text className="dark:text-white">Loading...</Text>
      </View>
    );
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white dark:bg-[#24293e]">
      <View className="flex-1 bg-white dark:bg-[#24293e]">
        <ScrollView>
          <View className="flex-col p-4 pb-0">
            <View className="flex-row items-center justify-start gap-4">
              <TouchableOpacity onPress={() => navigation.goBack("Services")}>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color={isDarkMode ? "#fff" : "#333"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="relative p-4 pt-2">
            <Image
              source={{
                uri: gig?.images[0],
              }}
              className="w-full object-cover h-60 rounded-2xl"
            />
            <TouchableOpacity className="absolute top-4 right-6 bg-white rounded-xl p-2 flex flex-row items-center justify-center">
              <AntDesign name="heart" size={14} color="rgb(120,82,243)" />
              <Text className="text-nft-primary-light ml-1 font-bold text-sm">
                44
              </Text>
            </TouchableOpacity>
          </View>

          <View className="p-4 pt-0 mb-36">
            <Text className="mb-2 font-medium text-2xl text-gray-800 dark:text-white">
              {gig?.title}
            </Text>

            <View className="flex justify-between flex-row items-center mb-2">
              <View className="flex flex-col">
                <Text className="text-xs text-gray-500 block w-full text-center">
                  Seller
                </Text>
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={{
                      uri: gig.user.avatar,
                    }}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <View className="flex flex-col justify-start items-center">
                    <Text className="text-gray-800 dark:text-white font-semibold text-left w-full">
                      {gig.user.name}
                    </Text>
                    <Text className="text-gray-500 text-xs text-left w-full">
                      @{gig.user.username}
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-col">
                <View className="flex flex-row items-center gap-2">
                  <View className="w-12 h-12 object-cover rounded-full bg-nft-primary-transparent flex items-center justify-center">
                    <MaterialIcons
                      name="category"
                      size={24}
                      color="rgb(120,82,243)"
                    />
                  </View>
                  <View className="flex flex-col justify-start items-center">
                    <Text className="text-gray-800 dark:text-white font-semibold text-left w-full">
                      Category
                    </Text>
                    <Text className="text-gray-500 text-xs text-left w-full">
                      {gig.category}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* keywords */}
            <View className="my-3">
              <Text className="text-gray-800 dark:text-white font-semibold text-left w-full">
                Keywords
              </Text>
              <View className="flex flex-row flex-wrap gap-2 mt-[1px]">
                {gig.keywords.map((keyword, index) => (
                  <View
                    className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full"
                    key={index}
                  >
                    <Text className="text-xs text-gray-500 dark:text-gray-300">
                      {keyword}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View>
              <View className="flex flex-col gap-4">
                <View>
                  <View className="mb-3 mt-0 flex-1 flex-row items-center space-x-3">
                    <View>
                      <Ionicons
                        name="newspaper-outline"
                        size={24}
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      Description
                    </Text>
                  </View>

                  <View>
                    <WebView
                      ref={webViewRef}
                      originWhitelist={["*"]}
                      source={{
                        html: `<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="background-color:${
                          isDarkMode ? "#24293e" : "white"
                        }"><div style="color: ${
                          isDarkMode ? "#eee" : "rgb(107 114 128 / 1)"
                        };font-size: 0.875rem;line-height: 1.25rem">${
                          gig?.description
                        }</div></body></html>`,
                      }}
                      style={{
                        flex: 1,
                        height: webViewHeight,
                      }}
                      onMessage={onMessage}
                      javaScriptEnabled={true}
                      injectedJavaScript={`window.ReactNativeWebView.postMessage(document.body.scrollHeight)`}
                    />
                  </View>
                </View>

                <View>
                  <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                    <View>
                      <MaterialCommunityIcons
                        name="cube-scan"
                        size={24}
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      Pricing
                    </Text>
                  </View>

                  <View className="flex flex-row justify-between gap-5">
                    <View className="items-center">
                      <Text className="text-lg font-semibold dark:text-white">
                        {gig.packages.basic.name}
                      </Text>
                      <View>
                        <Text className="dark:text-white">
                          ${gig.packages.basic.price}
                        </Text>
                      </View>
                    </View>

                    {gig.offer3Packages && (
                      <View className="items-center">
                        <Text className="text-lg font-semibold dark:text-white">
                          {gig.packages.standard.name}
                        </Text>
                        <View>
                          <Text className="dark:text-white">
                            ${gig.packages.standard.price}
                          </Text>
                        </View>
                      </View>
                    )}

                    {gig.offer3Packages && (
                      <View className="items-center">
                        <Text className="text-lg font-semibold dark:text-white">
                          {gig.packages.premium.name}
                        </Text>
                        <View>
                          <Text className="dark:text-white">
                            ${gig.packages.premium.price}
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                </View>

                <View>
                  <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                    <View>
                      <Feather
                        name="activity"
                        size={24}
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      Reviews
                    </Text>
                  </View>

                  <View className="flex flex-col gap-2">
                    {gigReviews.map((review, index) => (
                      <View
                        className="flex flex-row justify-start items-center space-x-4"
                        key={index}
                      >
                        <Image
                          source={{
                            uri: review.buyer.avatar,
                          }}
                          className="w-12 h-12 object-cover rounded-full"
                        />

                        <View>
                          <Text className="text-gray-800 dark:text-white font-semibold text-left w-full">
                            {review.buyer.name}
                          </Text>
                          <Text className="text-gray-500 text-xs text-left w-full">
                            <Feather
                              name="star"
                              size={14}
                              color="rgb(234 88 12)"
                            />{" "}
                            {review.rating}
                          </Text>

                          <Text className="dark:text-white">
                            {review.reviewText}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>

                <View>
                  <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                    <View>
                      <AntDesign
                        name="questioncircleo"
                        size={24}
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      FAQs
                    </Text>
                  </View>

                  <View className="flex flex-col gap-2 w-full">
                    {gig.faqs.map((faq, index) => (
                      <View
                        className="flex flex-row justify-start items-center space-x-4 w-full"
                        key={index}
                      >
                        <View className="w-full">
                          <Text className="text-gray-800 dark:text-white font-semibold text-left w-full">
                            {faq.question}
                          </Text>
                          <Text className="text-gray-500 dark:text-gray-400 text-xs w-full">
                            {faq.answer}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
