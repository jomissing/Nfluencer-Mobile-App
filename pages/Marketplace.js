import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Trending from "../components/Trending";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDarkMode } from "../pages/redux/DarkModeContext";

export default function Marketplace() {
  const navigation = useNavigation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const categories = [
    {
      id: 4,
      name: "Art",
      image: require("../assets/nfts/art.webp"), // Replace with actual image source
    },
    {
      id: 1,
      name: "Gaming",
      image: require("../assets/nfts/gaming.webp"), // Replace with actual image source
    },
    {
      id: 1,
      name: "Memberships",
      image: require("../assets/nfts/memberships.webp"), // Replace with actual image source
    },
    {
      id: 3,
      name: "Music",
      image: require("../assets/nfts/music.webp"), // Replace with actual image source
    },
    {
      id: 3,
      name: "PFPs",
      image: require("../assets/nfts/pfps.webp"), // Replace with actual image source
    },
    {
      id: 3,
      name: "Photography",
      image: require("../assets/nfts/photo.webp"), // Replace with actual image source
    },
  ];
  const featuredNFTs = [
    {
      name: "Happy Lemar NFT",
      price: 5.49,
      image: require("../assets/nfts/nft19.jpg"),
      category: "Art",
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
      name: "Kitty Cat NFT",
      price: 5.49,
      image: require("../assets/nfts/nft7.jpeg"),
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
      name: "Coolorful Sword NFT",
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
  ];
  const topSellers = [
    {
      name: "Usama MK",
      totalItems: 10,
      totalEarnings: 0.49,
      image: require("../assets/nfts/creator.jpg"),
    },
    {
      name: "John Doe",
      totalItems: 10,
      totalEarnings: 0.49,
      image: require("../assets/nfts/art.webp"),
    },
    {
      name: "Rohit Sharma",
      totalItems: 10,
      totalEarnings: 0.49,
      image: require("../assets/nfts/memberships.webp"),
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

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white dark:bg-[#24293e]">
      <View className="flex-1 bg-white dark:bg-[#24293e]">
        {/* Top Bar */}
        <View className="flex-row justify-between items-center p-4 pt-0">
          <View className="flex-1 flex-row items-center justify-start">
            <Text className="text-2xl font-bold text-gray-800 dark:text-white">
              NFT Marketplace
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("SearchMarketplace")}
            >
              <AntDesign
                name="search1"
                size={24}
                color={isDarkMode ? "#fff" : "#333"}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <Trending />

          <ScrollView
            className="flex-1 bg-white dark:bg-[#24293e] pt-5 px-3"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-1 items-center gap-2 justify-start flex-row overflow-auto">
              {categories.map((category, index) => (
                <View
                  className="text-center flex flex-col items-center"
                  key={index}
                >
                  <TouchableOpacity
                    className="rounded-3xl overflow-hidden border-gray-100 dark:border-gray-600 w-20 h-20"
                    style={{ borderWidth: 5 }}
                  >
                    <Image
                      source={category.image}
                      className="w-full h-full object-cover"
                    />
                  </TouchableOpacity>
                  <Text className="text-gray-500 font-medium">
                    {category.name}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <View className="flex-1 justify-between items-center flex-row w-full mt-10 px-3">
            <Text className="text-xl font-bold text-gray-800 dark:text-white flex-1">
              Featured
            </Text>

            <TouchableOpacity
              className="flex flex-row gap-1 items-center"
              onPress={() => navigation.navigate("SearchMarketplace")}
            >
              <Text className="font-semibold underline dark:text-white">
                See all
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={isDarkMode ? "#fff" : "#333"}
              />
            </TouchableOpacity>
          </View>

          {/* Featured NFTs */}
          <ScrollView
            className="flex-1 bg-white dark:bg-[#24293e] pt-5 px-3"
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
                            source={nft.creator.image}
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
                            {nft.price} ETH
                          </Text>
                        </View>
                        <Text className="text-sm text-gray-500">
                          ${nft.price * 3000}
                        </Text>
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

          <View className="flex-1 justify-between items-center flex-row w-full mt-10 px-3">
            <Text className="text-xl font-bold text-gray-800 dark:text-white flex-1">
              Top sellers
            </Text>

            <TouchableOpacity
              className="flex flex-row gap-1 items-center"
              onPress={() => navigation.navigate("SearchMarketplace")}
            >
              <Text className="font-semibold underline dark:text-white">
                See all
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={isDarkMode ? "#fff" : "#333"}
              />
            </TouchableOpacity>
          </View>

          <View className="flex flex-col gap-y-3 mt-4 mb-4 mx-0.5 px-3">
            {topSellers.map((seller, index) => (
              <View
                key={index}
                className="flex justify-between items-center flex-row py-5 rounded-xl px-3 bg-white dark:bg-[#24293e]"
                style={{
                  shadowColor: isDarkMode ? "#000" : "#999",
                  shadowOffset: { width: 10, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 10,
                }}
              >
                <View className="flex items-center flex-row gap-2">
                  <Image
                    source={seller.image}
                    className="w-12 h-12 rounded-full"
                  />
                  <View className="flex flex-col items-center justify-start">
                    <Text className="text-left w-full font-bold text-lg text-gray-800 dark:text-white">
                      {seller.name}
                    </Text>
                    <Text className="text-left w-full font-normal text-xs text-gray-500">
                      Total Items: {seller.totalItems}
                    </Text>
                  </View>
                </View>

                <View className="flex flex-row">
                  <View>
                    <Image
                      source={require("../assets/nfts/eth.png")}
                      className="w-7 h-7"
                      resizeMode="contain"
                    />
                  </View>

                  <View className="flex flex-col justify-start">
                    <Text className="text-xl font-bold dark:text-white">
                      {seller.totalEarnings} ETH
                    </Text>
                    <Text className="text-left w-full font-normal text-xs text-gray-500">
                      $5000
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View className="flex-1 justify-between items-center flex-row w-full mt-10 px-3">
            <Text className="text-xl font-bold text-gray-800 dark:text-white flex-1">
              Collections
            </Text>

            <TouchableOpacity
              className="flex flex-row gap-1 items-center"
              onPress={() => navigation.navigate("SearchMarketplace")}
            >
              <Text className="font-semibold underline dark:text-white">
                See all
              </Text>
              <AntDesign
                name="right"
                size={20}
                color={isDarkMode ? "#fff" : "#333"}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            className="flex-1 bg-white pt-5 px-3 dark:bg-[#24293e]"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-1 items-center gap-2 justify-start flex-row overflow-auto p-3 pl-1 pt-0 px-3">
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
                      source={require("../assets/nfts/nft23.png")}
                      className="w-full object-cover h-56 rounded-t-2xl"
                    />
                    <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-xl p-2 flex flex-row items-center justify-center">
                      <AntDesign
                        name="heart"
                        size={14}
                        color="rgb(120,82,243)"
                      />
                      <Text className="text-nft-primary-light ml-1 font-bold text-sm">
                        12
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
                    <Text className="mb-2 font-medium text-lg text-gray-800 dark:text-white">
                      Bored Ape Yacht Club
                    </Text>

                    <View className="flex justify-between flex-row items-center">
                      <View className="flex flex-col justify-center items-center">
                        <Text className="text-gray-500 font-normal text-xs w-full text-center">
                          Total Items
                        </Text>
                        <Text className="text-gray-800 dark:text-white text-xl w-full font-semibold text-center">
                          34
                        </Text>
                      </View>

                      <View className="flex flex-col justify-center items-center">
                        <Text className="text-gray-500 font-normal text-xs w-full text-center">
                          Items Sold
                        </Text>
                        <Text className="text-gray-800 dark:text-white text-xl w-full font-semibold text-center">
                          5
                        </Text>
                      </View>

                      <View className="flex flex-col justify-center items-center">
                        <Text className="text-gray-500 font-normal text-xs w-full text-center">
                          Total Sales
                        </Text>
                        <Text className="text-gray-800 dark:text-white text-xl w-full font-semibold text-center">
                          10 ETH
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View className="flex-1 items-center gap-2 justify-start flex-row overflow-auto p-3 pl-1 pt-0 px-3">
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
                      source={require("../assets/nfts/creator.jpg")}
                      className="w-full object-cover h-56 rounded-t-2xl"
                    />
                    <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-xl p-2 flex flex-row items-center justify-center">
                      <AntDesign
                        name="heart"
                        size={14}
                        color="rgb(120,82,243)"
                      />
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
                    <Text className="mb-2 font-medium text-lg text-gray-800 dark:text-white">
                      Empire Galaxies
                    </Text>

                    <View className="flex justify-between flex-row items-center">
                      <View className="flex flex-col justify-center items-center">
                        <Text className="text-gray-500 font-normal text-xs w-full text-center">
                          Total Items
                        </Text>
                        <Text className="text-gray-800 dark:text-white text-xl w-full font-semibold text-center">
                          10
                        </Text>
                      </View>

                      <View className="flex flex-col justify-center items-center">
                        <Text className="text-gray-500 font-normal text-xs w-full text-center">
                          Items Sold
                        </Text>
                        <Text className="text-gray-800 dark:text-white text-xl w-full font-semibold text-center">
                          34
                        </Text>
                      </View>

                      <View className="flex flex-col justify-center items-center">
                        <Text className="text-gray-500 font-normal text-xs w-full text-center">
                          Total Sales
                        </Text>
                        <Text className="text-gray-800 dark:text-white text-xl w-full font-semibold text-center">
                          0.49 ETH
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
