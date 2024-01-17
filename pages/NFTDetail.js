import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PriceHistory from "../components/PriceHistory";
import { useDarkMode } from "../pages/redux/DarkModeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";

export default function NFTDetail() {
  const navigation = useNavigation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const featuredNFTs = [
    {
      name: "Empire is here",
      price: 0.49,
      image: require("../assets/nfts/nft2.jpg"),
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
      name: "Magistical Horses NFT",
      price: 0.49,
      image: require("../assets/nfts/gaming.webp"),
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

  const handleSaveItem = () => {
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

  const handleLinkPress = (url) => {
    const externalLink = url;
    Linking.openURL(externalLink);
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white dark:bg-[#24293e]">
      <View className="flex-1 bg-white dark:bg-[#24293e]">
        <ScrollView>
          <View className="flex-col p-4 pb-0">
            <View className="flex-row items-center justify-start gap-4">
              <TouchableOpacity
                onPress={() => navigation.goBack("Marketplace")}
              >
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
              source={require("../assets/nfts/nft1.webp")}
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
              Bored Ape Yacht Club
            </Text>

            <View className="flex justify-between flex-row items-center mb-2">
              <View className="flex flex-col">
                <Text className="text-xs text-gray-500 block w-full text-center">
                  Current Owner
                </Text>
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={require("../assets/nfts/creator.jpg")}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <View className="flex flex-col justify-start items-center">
                    <Text className="text-gray-800 font-semibold text-left w-full dark:text-white">
                      John Doe
                    </Text>
                    <Text className="text-gray-500 text-xs text-left w-full">
                      0x1234567890
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-col">
                <Text className="text-xs text-gray-500 block w-full text-center">
                  Creator
                </Text>
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={require("../assets/nfts/nft1.webp")}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <View className="flex flex-col justify-start items-center">
                    <Text className="text-gray-800 font-semibold text-left w-full dark:text-white">
                      John Doe
                    </Text>
                    <Text className="text-gray-500 text-xs text-left w-full">
                      0x1234567890
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex justify-between flex-row items-center">
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
                    <Text className="text-gray-800 font-semibold text-left w-full dark:text-white">
                      Category
                    </Text>
                    <Text className="text-gray-500 text-xs text-left w-full">
                      Art
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-col">
                <View className="flex flex-row items-center gap-2">
                  <Image
                    source={require("../assets/nfts/pfps.webp")}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <View className="flex flex-col justify-start items-center">
                    <Text className="text-gray-800 font-semibold text-left w-full dark:text-white">
                      Collection
                    </Text>
                    <Text className="text-gray-500 text-xs text-left w-full">
                      0x1234567890
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex justify-center flex-row items-center my-7">
              <View
                className=" bg-white p-5 rounded-xl w-full dark:bg-[#24293e]"
                style={{
                  shadowColor: isDarkMode ? "#000" : "#999",
                  shadowOffset: { width: 10, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 10,
                }}
              >
                <Text className="w-full text-gray-500 mb-2 block font-medium">
                  Current Price
                </Text>
                <View className="flex flex-row items-end gap-1">
                  <View className="flex items-end justify-start gap-1 flex-row">
                    <Image
                      source={require("../assets/nfts/eth.png")}
                      className="w-10 h-10 object-contain"
                      style={{ resizeMode: "contain" }}
                    />
                    <Text className="text-4xl font-bold dark:text-white">
                      0.49 ETH
                    </Text>
                  </View>
                  <Text className="text-lg text-gray-500">$13.54</Text>
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
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      Description
                    </Text>
                  </View>

                  <Text className="text-sm text-gray-500 dark:text-gray-400">
                    Adjust the code based on the actual structure of your NFT
                    objects and the details you want to include in the
                    creatorDetails object. This example assumes that the
                    relevant details are available in the nft.creator object,
                    and you can access them directly.
                  </Text>
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
                      Traits
                    </Text>
                  </View>

                  <View className="flex flex-row gap-2">
                    <View className="bg-gray-100 dark:bg-gray-600 w-fit flex flex-row gap-x-2 p-2 rounded-lg items-center">
                      <Text className="text-gray-500 text-sm dark:text-gray-400">
                        Background
                      </Text>
                      <Text className="text-gray-500 font-semibold text-sm dark:text-gray-400">
                        Blue
                      </Text>
                    </View>

                    <View className="bg-gray-100 dark:bg-gray-600 w-fit flex flex-row gap-x-2 p-2 rounded-lg items-center">
                      <Text className="text-gray-500 text-sm dark:text-gray-400">
                        Type
                      </Text>
                      <Text className="text-gray-500 font-semibold text-sm dark:text-gray-400">
                        Orange
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                    <View>
                      <MaterialIcons
                        name="format-list-bulleted"
                        size={24}
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      Details
                    </Text>
                  </View>

                  <View className="flex flex-col gap-1">
                    <View className="flex flex-row p-1.5 px-0 rounded-lg items-center justify-between">
                      <Text className="text-gray-500 text-sm">
                        Contract Address
                      </Text>
                      <Text className="text-nft-primary-light font-semibold text-sm">
                        0x0000...b719
                      </Text>
                    </View>

                    <View className="flex flex-row p-1.5 px-0 rounded-lg items-center justify-between">
                      <Text className="text-gray-500 text-sm">Token ID</Text>
                      <Text className="text-gray-500 font-semibold text-sm">
                        6
                      </Text>
                    </View>

                    <View className="flex flex-row p-1.5 px-0 rounded-lg items-center justify-between">
                      <Text className="text-gray-500 text-sm">
                        Token Standard
                      </Text>
                      <Text className="text-gray-500 font-semibold text-sm">
                        ERC-721
                      </Text>
                    </View>

                    <View className="flex flex-row p-1.5 px-0 rounded-lg items-center justify-between">
                      <Text className="text-gray-500 text-sm">Chain</Text>
                      <Text className="text-gray-500 font-semibold text-sm">
                        Ethereum
                      </Text>
                    </View>

                    <View className="flex flex-row p-1.5 px-0 rounded-lg items-center justify-between">
                      <Text className="text-gray-500 text-sm">
                        Creator Earnings
                      </Text>
                      <Text className="text-gray-500 font-semibold text-sm">
                        43%
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                    <View>
                      <SimpleLineIcons
                        name="people"
                        size={24}
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      Ownership History
                    </Text>
                  </View>

                  <View className="flex flex-col gap-1">
                    <View className="flex flex-row items-center space-x-3">
                      <Image
                        source={require("../assets/nfts/creator.jpg")}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                      <View className="flex flex-col justify-start items-center">
                        <Text className="text-gray-800 font-semibold text-left w-full dark:text-white">
                          John Doe
                        </Text>
                        <Text className="text-gray-500 text-xs text-left w-full">
                          0x1234567890
                        </Text>
                      </View>
                      <Text className="bg-gray-100 p-2 rounded-lg text-gray-500 font-medium px-3">
                        Buyer
                      </Text>
                    </View>

                    <View className="block w-full h-6">
                      <View className="h-6 border-dotted border-l-2 border-gray-500 absolute left-[22px]"></View>
                    </View>

                    <View className="flex flex-row items-center space-x-3">
                      <Image
                        source={require("../assets/nfts/creator.jpg")}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                      <View className="flex flex-col justify-start items-center">
                        <Text className="text-gray-800 font-semibold text-left w-full">
                          John Doe
                        </Text>
                        <Text className="text-gray-500 text-xs text-left w-full">
                          0x1234567890
                        </Text>
                      </View>
                      <Text className="bg-green-100 p-2 rounded-lg text-green-700 font-medium px-3">
                        Creator
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <View className="mb-3 mt-2 flex-1 flex-row items-center space-x-3">
                    <View>
                      <MaterialIcons
                        name="history"
                        size={24}
                        color={isDarkMode ? "#fff" : "black"}
                      />
                    </View>
                    <Text className="font-medium text-2xl text-gray-800 dark:text-white">
                      Price History
                    </Text>
                  </View>

                  <View>
                    <PriceHistory isDarkMode={isDarkMode} />
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
                      Item Activity
                    </Text>
                  </View>

                  <View className="flex flex-col gap-2">
                    <View className="flex flex-row justify-between items-center">
                      <Text className="text-xs text-gray-500 text-left flex-1 w-full">
                        Event
                      </Text>
                      <Text className="text-xs text-gray-500 text-left flex-1 w-full">
                        Price
                      </Text>
                      <Text className="text-xs text-gray-500 text-left flex-1 w-full">
                        From
                      </Text>
                      <Text className="text-xs text-gray-500 text-left flex-1 w-full">
                        To
                      </Text>
                    </View>

                    <View className="flex flex-row justify-between items-center">
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white pl-1">
                        List
                      </Text>
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white">
                        0.49 ETH
                      </Text>
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white">
                        0x51..12e
                      </Text>
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white">
                        0x51..12e
                      </Text>
                    </View>

                    <View className="flex flex-row justify-between items-center">
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white pl-1">
                        Mint
                      </Text>
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white">
                        0.49 ETH
                      </Text>
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white">
                        0x51..12e
                      </Text>
                      <Text className="text-sm text-gray-800 font-medium text-left flex-1 w-full dark:text-white">
                        0x51..12e
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex-1 justify-between items-center flex-row w-full mt-10 border-t border-gray-200 dark:border-gray-600 pt-7">
              <Text className="text-2xl font-semibold text-gray-800 flex-1 dark:text-white">
                More from Collection
              </Text>
            </View>

            {/* Featured NFTs */}
            <ScrollView
              className="flex-1 bg-white pt-5 dark:bg-[#24293e]"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {featuredNFTs.map((nft, index) => (
                <View
                  className="flex-1 items-center gap-2 justify-start flex-row overflow-auto p-3 pl-1 pt-0"
                  key={index}
                >
                  <View className="w-72 m-3">
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
                          className="w-full object-cover h-56 rounded-2xl"
                        />
                        <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-xl p-2 flex flex-row items-center justify-center">
                          <AntDesign
                            name="heart"
                            size={14}
                            color="rgb(120,82,243)"
                          />
                          <Text className="text-nft-primary-light ml-1 font-bold text-sm">
                            {nft.likes}
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View className="-mt-6 px-3 flex justify-between items-center flex-row">
                        <View className="flex flex-row" style={{ gap: -12 }}>
                          {nft.ownershipHistory.map((owner, index) => (
                            <Image
                              source={owner.image}
                              key={index}
                              className="w-10 h-10 rounded-full border"
                              style={{ borderWidth: 2, borderColor: "white" }}
                            />
                          ))}
                        </View>

                        <TouchableOpacity
                          className="text-nft-primary-light bg-white rounded-full p-2 dark:bg-[#24293e] dark:text-white"
                          style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 4,
                          }}
                        >
                          <AntDesign
                            name="ellipsis1"
                            size={24}
                            color={isDarkMode ? "#fff" : "black"}
                          />
                        </TouchableOpacity>
                      </View>

                      <View className="p-3 pt-1">
                        <Text className="mb-2 font-medium text-lg text-gray-800 dark:text-white">
                          {nft.name}
                        </Text>

                        <View className="flex justify-between flex-row items-center">
                          <View className="flex flex-row items-center gap-2">
                            <Image
                              source={require("../assets/nfts/creator.jpg")}
                              className="w-12 h-12 object-cover rounded-full"
                            />
                            <View className="flex flex-col justify-start items-center">
                              <Text className="text-gray-800 dark:text-white font-semibold text-left w-full">
                                {nft.creator.username}
                              </Text>
                              <Text className="text-gray-500 text-xs text-left w-full">
                                {nft.creator.address}
                              </Text>
                            </View>
                          </View>

                          <View className="flex flex-row items-center gap-2">
                            <Image
                              source={require("../assets/nfts/collection.png")}
                              className="w-12 h-12 object-cover rounded-full"
                            />
                            <View className="flex flex-col justify-start items-center">
                              <Text className="text-gray-800 dark:text-white font-semibold text-left w-full">
                                {nft.collection.name.substring(0, 10) + "..."}
                              </Text>
                              <Text className="text-gray-500 text-xs text-left w-full">
                                {nft.collection.items} Items
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View className="flex flex-row items-end gap-1 mt-1">
                          <View className="flex items-center justify-start gap-2 flex-row">
                            <Image
                              source={require("../assets/nfts/eth.png")}
                              className="w-7 h-7 object-contain"
                              style={{ resizeMode: "contain" }}
                            />
                            <Text className="text-xl font-bold dark:text-white">
                              0.49 ETH
                            </Text>
                          </View>
                          <Text className="text-sm text-gray-500">$13.54</Text>
                        </View>

                        <View className="w-full mt-4 flex items-center flex-row gap-x-2">
                          <TouchableOpacity
                            className="flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-xl p-2 py-3 flex-1"
                            onPress={handleSaveItem}
                          >
                            <Text className="text-gray-500 dark:text-gray-400 text-base font-semibold">
                              Save Item
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            className="flex items-center justify-center bg-nft-primary-light rounded-xl p-2 py-3 flex-1"
                            onPress={() => navigation.navigate("NFTDetail")}
                          >
                            <Text className="text-white text-base font-semibold">
                              View Details
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        <View className="flex-1 gap-2 p-2 pt-0 absolute bg-white bottom-0 flex-row border-t border-gray-100 dark:bg-[#24293e] dark:border-gray-600">
          <TouchableOpacity
            className="bg-nft-primary rounded-lg p-3 flex-1 bg-nft-primary-light space-x-2 flex-row items-center justify-center"
            onPress={() =>
              handleLinkPress("https://nfluencer-website.vercel.app")
            }
          >
            <Feather name="shopping-cart" size={24} color="white" />
            <Text className="text-white font-semibold text-center text-base">
              Buy Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-nft-primary rounded-lg p-3 flex-1 bg-nft-primary-transparent flex-row items-center justify-center space-x-2"
            onPress={handleSaveItem}
          >
            <Feather name="bookmark" size={24} color="rgb(120 82 243)" />
            <Text className="text-nft-primary-light font-semibold text-center text-base">
              Save Item
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
