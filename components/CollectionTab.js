import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CollectionTab({ navigation }) {
  const NFTs = [
    {
      name: "NFT Name Here",
      price: 0.49,
      image: require("../assets/nfts/nft1.webp"),
      category: "Gaming",
      collection: {
        name: "Mutants",
        items: 10,
      },
      likes: 0,
      creator: {
        name: "John",
        username: "@johndoe",
        address: "0x00...uj09",
        image: require("../assets/nfts/creator.jpg"),
      },
      currentOwner: {
        name: "Owner",
        username: "@Owner",
        address: "0x00...uj09",
        // image: require("../assets/nfts/owner.jpg"),
      },
      ownershipHistory: [
        {
          name: "Owner",
          username: "@Owner",
          address: "0x00...uj09",
          image: require("../assets/nfts/art.webp"),
          date: "12/12/2021",
        },
        {
          name: "Owner",
          username: "@Owner",
          address: "0x00...uj09",
          image: require("../assets/nfts/music.webp"),
          date: "12/12/2021",
        },
        {
          name: "Owner",
          username: "@Owner",
          address: "0x00...uj09",
          image: require("../assets/nfts/pfps.webp"),
          date: "12/12/2021",
        },
      ],
    },
    {
      name: "NFT Name Here",
      price: 0.49,
      image: require("../assets/nfts/creator.jpg"),
      category: "Gaming",
      collection: {
        name: "Mutants",
        items: 10,
      },
      likes: 0,
      creator: {
        name: "John",
        username: "@johndoe",
        address: "0x00...uj09",
        image: require("../assets/nfts/creator.jpg"),
      },
      currentOwner: {
        name: "Owner",
        username: "@Owner",
        address: "0x00...uj09",
        // image: require("../assets/nfts/owner.jpg"),
      },
      ownershipHistory: [
        {
          name: "Owner",
          username: "@Owner",
          address: "0x00...uj09",
          image: require("../assets/nfts/art.webp"),
          date: "12/12/2021",
        },
        {
          name: "Owner",
          username: "@Owner",
          address: "0x00...uj09",
          image: require("../assets/nfts/music.webp"),
          date: "12/12/2021",
        },
        {
          name: "Owner",
          username: "@Owner",
          address: "0x00...uj09",
          image: require("../assets/nfts/pfps.webp"),
          date: "12/12/2021",
        },
      ],
    },
  ];

  return (
    <>
      <View className="flex-1 items-center gap-2 justify-start flex-row overflow-auto p-3 pl-1 pt-0">
        <View className="w-full m-3">
          <View
            className="rounded-xl shadow-xl bg-white"
            style={{
              backgroundColor: "#fff",
              shadowColor: "#999",
              shadowOffset: { width: 10, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 10,
            }}
          >
            <View className="relative">
              <Image
                source={require("../assets/nfts/creator.jpg")}
                className="w-full object-cover h-44 rounded-t-2xl"
              />
              <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-xl p-2 flex flex-row items-center justify-center">
                <AntDesign name="heart" size={14} color="rgb(120,82,243)" />
                <Text className="text-nft-primary-light ml-1 font-bold text-sm">
                  10
                </Text>
              </TouchableOpacity>
            </View>

            <View className="-mt-8 px-3 flex justify-between items-center flex-row">
              <Image
                source={require("../assets/nfts/pfps.webp")}
                className="w-14 h-14 rounded-full border"
                style={{ borderWidth: 2, borderColor: "white" }}
              />
            </View>

            <View className="p-3 pt-1">
              <Text className="mb-2 font-medium text-lg text-gray-800">
                Bored Ape Yacht Club
              </Text>

              <View className="flex justify-between flex-row items-center">
                <View className="flex flex-col justify-center items-center">
                  <Text className="text-gray-500 font-normal text-xs w-full text-center">
                    Total Items
                  </Text>
                  <Text className="text-gray-800 text-xl w-full font-semibold text-center">
                    10
                  </Text>
                </View>

                <View className="flex flex-col justify-center items-center">
                  <Text className="text-gray-500 font-normal text-xs w-full text-center">
                    Items Sold
                  </Text>
                  <Text className="text-gray-800 text-xl w-full font-semibold text-center">
                    34
                  </Text>
                </View>

                <View className="flex flex-col justify-center items-center">
                  <Text className="text-gray-500 font-normal text-xs w-full text-center">
                    Total Sales
                  </Text>
                  <Text className="text-gray-800 text-xl w-full font-semibold text-center">
                    0.49 ETH
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
