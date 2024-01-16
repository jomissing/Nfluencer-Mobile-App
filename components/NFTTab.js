import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function NFTTab({ navigation, isDarkMode }) {
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
    <View className="flex flex-row">
      {/* -------------- */}
      {NFTs.map((nft, index) => (
        <View
          className="flex-1 items-center gap-2 justify-start flex-row overflow-auto p-3 pl-1 pt-0"
          key={index}
        >
          <View className="w-40 m-3">
            <View
              className="rounded-xl shadow-xl bg-white dark:bg-[#24293e]"
              style={{
                shadowColor: isDarkMode ? "#000" : "#999",
                shadowOffset: { width: 10, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 10,
              }}
            >
              <View className="relative">
                <Image
                  source={nft.image}
                  className="w-full object-cover h-40 rounded-t-2xl rounded-b-2xl"
                />
                <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-xl p-2 flex flex-row items-center justify-center">
                  <AntDesign name="heart" size={14} color="rgb(120,82,243)" />
                  <Text className="text-nft-primary-light ml-1 font-bold text-sm">
                    {nft.likes}
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="-mt-5 px-3 flex justify-between items-center flex-row">
                <View className="flex flex-row" style={{ gap: -12 }}>
                  {nft.ownershipHistory.map((owner, index) => (
                    <Image
                      source={owner.image}
                      key={index}
                      className="w-8 h-8 rounded-full border"
                      style={{ borderWidth: 2, borderColor: "white" }}
                    />
                  ))}
                </View>
              </View>

              <View className="p-2 pt-1">
                <Text className="mb-2 font-medium text-base text-gray-800 dark:text-white">
                  {nft.name}
                </Text>

                <View className="flex justify-between flex-row items-center">
                  <View className="flex flex-row items-center gap-1">
                    <Image
                      source={require("../assets/nfts/creator.jpg")}
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <View className="flex flex-col justify-start items-center">
                      <Text className="text-gray-800 dark:text-white font-semibold text-left w-full text-xs">
                        {nft.creator.username}
                      </Text>
                      <Text className="text-gray-500 text-xs text-left w-full">
                        {nft.creator.address}
                      </Text>
                    </View>
                  </View>
                </View>

                <View className="flex flex-row items-end gap-1">
                  <View className="flex items-center justify-start gap-1 flex-row">
                    <Image
                      source={require("../assets/nfts/eth.png")}
                      className="w-5 h-5 object-contain"
                      style={{ resizeMode: "contain" }}
                    />
                    <Text className="text-base font-bold dark:text-white">
                      0.49 ETH
                    </Text>
                  </View>
                  <Text className="text-xs text-gray-500">$13.54</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
      {/* -------------- */}
    </View>
  );
}
