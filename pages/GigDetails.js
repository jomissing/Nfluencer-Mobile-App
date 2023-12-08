import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { APP_API_URL } from "@env";

export default function GigDetails() {
  const navigation = useNavigation();

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
    console.log(res);
    setGig(res[0]);
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

  if (!gig)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  return (
    <View className="flex-1 bg-white pt-7 pb-0 relative">
      <ScrollView>
        <View className="flex-col p-4 pb-0">
          <View className="flex-row items-center justify-start gap-4">
            <TouchableOpacity onPress={() => navigation.goBack("Services")}>
              <AntDesign name="arrowleft" size={24} color="#333" />
            </TouchableOpacity>
            {/* <Text className="text-2xl font-bold text-gray-800">
            Search Marketplace
          </Text> */}
          </View>
        </View>

        <View className="relative p-4 pt-2">
          <Image
            source={{
              uri: gig?.images[0],
            }}
            className="w-full object-cover h-60 rounded-2xl"
          />
          <TouchableOpacity
            onPress={() => console.log("Options pressed")}
            className="absolute top-4 right-6 bg-white rounded-xl p-2 flex flex-row items-center justify-center"
          >
            <AntDesign name="heart" size={14} color="rgb(120,82,243)" />
            <Text className="text-nft-primary-light ml-1 font-bold text-sm">
              44
            </Text>
          </TouchableOpacity>
        </View>

        <View className="p-4 pt-0 mb-36">
          <Text className="mb-2 font-medium text-2xl text-gray-800">
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
                  <Text className="text-gray-800 font-semibold text-left w-full">
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
                  <Text className="text-gray-800 font-semibold text-left w-full">
                    Category
                  </Text>
                  <Text className="text-gray-500 text-xs text-left w-full">
                    {gig.category}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View className="flex flex-col gap-4">
              <View>
                <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                  <View>
                    <Ionicons
                      name="newspaper-outline"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text className="font-medium text-2xl text-gray-800">
                    Description
                  </Text>
                </View>

                {/* <WebView
                  originWhitelist={["*"]}
                  source={{ html: gig?.description }}
                  style={{ flex: 1 }}
                /> */}
                <Text className="text-sm text-gray-500">
                  {gig?.description}
                </Text>
              </View>

              <View>
                <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                  <View>
                    <MaterialCommunityIcons
                      name="cube-scan"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text className="font-medium text-2xl text-gray-800">
                    Pricing
                  </Text>
                </View>

                <View className="flex flex-row justify-between gap-5">
                  <View className="items-center">
                    <Text className="text-lg font-semibold">
                      {gig.packages.basic.name}
                    </Text>
                    <View>
                      <Text>${gig.packages.basic.price}</Text>
                    </View>
                  </View>

                  {gig.offer3Packages && (
                    <View className="items-center">
                      <Text className="text-lg font-semibold">
                        {gig.packages.standard.name}
                      </Text>
                      <View>
                        <Text>${gig.packages.standard.price}</Text>
                      </View>
                    </View>
                  )}

                  {gig.offer3Packages && (
                    <View className="items-center">
                      <Text className="text-lg font-semibold">
                        {gig.packages.premium.name}
                      </Text>
                      <View>
                        <Text>${gig.packages.premium.price}</Text>
                      </View>
                    </View>
                  )}
                </View>
              </View>

              <View>
                <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                  <View>
                    <Feather name="activity" size={24} color="black" />
                  </View>
                  <Text className="font-medium text-2xl text-gray-800">
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
                        <Text className="text-gray-800 font-semibold text-left w-full">
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

                        <Text>{review.reviewText}</Text>
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
  );
}
