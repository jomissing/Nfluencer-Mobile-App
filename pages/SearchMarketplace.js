import React, { useState, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import NFTTab from "../components/NFTTab";
import CollectionTab from "../components/CollectionTab";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDarkMode } from "../pages/redux/DarkModeContext";

export default function SearchMarketplace() {
  const navigation = useNavigation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const openSidebar = () => {
    setIsSidebarOpen(true);
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsSidebarOpen(false);
    });
  };

  const overlayOpacity = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const sidebarStyles = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [Dimensions.get("window").height, 0],
        }),
      },
    ],
  };

  const categories = [
    {
      label: "All",
      value: "1",
    },
    {
      label: "Art",
      value: "2",
    },
    {
      label: "Gaming",
      value: "3",
    },
    {
      label: "Memberships",
      value: "4",
    },
    {
      label: "PFPs",
      value: "5",
    },
    {
      label: "Photography",
      value: "6",
    },
    {
      label: "Music",
      value: "7",
    },
  ];

  const [value, setValue] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const [activeTab, setActiveTab] = useState("NFTs");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
    <SafeAreaView style={{ flex: 1 }} className="bg-white dark:bg-[#24293e]">
      <View className="flex-1 bg-white dark:bg-[#24293e]">
        {/* Top Bar */}
        <View className="flex-col p-4 pt-0">
          <View className="flex-row items-center justify-start gap-4">
            <TouchableOpacity onPress={() => navigation.goBack("Marketplace")}>
              <AntDesign
                name="arrowleft"
                size={24}
                color={isDarkMode ? "#fff" : "#333"}
              />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-gray-800 dark:text-white">
              Search Marketplace
            </Text>
          </View>

          <View className="flex flex-row items-center gap-3 mt-1">
            <View className="flex-1 relative">
              <TextInput
                className=" text-gray-800 dark:text-white text-base font-normal p-3 bg-white dark:bg-gray-600 border-2 border-gray-300 dark:border-gray-500 rounded-xl"
                placeholder="Search..."
                placeholderTextColor="rgb(156 163 175)"
              />
              <View className="absolute top-3.5 right-2 block">
                <AntDesign
                  name="search1"
                  size={24}
                  color="border-color: rgb(209 213 219)"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={isSidebarOpen ? closeSidebar : openSidebar}
              className="bg-gray-100 dark:bg-gray-600 p-4 rounded-xl"
            >
              <Ionicons
                name="filter-outline"
                size={24}
                color={isDarkMode ? "rgb(209 213 219)" : "#333"}
              />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-between items-center p-0 mt-3">
            <TouchableOpacity
              className="text-center flex-1 items-center"
              onPress={() => handleTabChange("NFTs")}
            >
              <Text
                className={`font-semibold border-b-2 text-center pb-1 w-full text-gray-400 border-transparent ${
                  activeTab === "NFTs" &&
                  " border-gray-800 text-gray-800 dark:text-white dark:border-gray-600"
                }`}
              >
                NFTs
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="text-center flex-1 items-center"
              onPress={() => handleTabChange("Collections")}
            >
              <Text
                className={`font-semibold border-b-2 text-center pb-1 w-full text-gray-400 border-transparent ${
                  activeTab === "Collections" &&
                  " border-gray-800 text-gray-800 dark:text-white dark:border-gray-600"
                }`}
              >
                Collections
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Overlay */}
        {isSidebarOpen && (
          <TouchableWithoutFeedback onPress={closeSidebar}>
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "black",
                opacity: overlayOpacity,
              }}
            />
          </TouchableWithoutFeedback>
        )}

        {/* Sidebar */}
        <Animated.ScrollView
          style={[
            sidebarStyles,
            {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "70%",
              backgroundColor: isDarkMode ? "#24293e" : "white",
              zIndex: 100,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          ]}
        >
          <View className="w-full h-full p-10 px-5 pt-5">
            <ScrollView>
              <View className="flex justify-between items-center flex-row border-b border-gray-200 pb-3">
                <Text className="font-semibold text-lg dark:text-white">
                  Filters
                </Text>
                <TouchableOpacity
                  onPress={closeSidebar}
                  className="rounded-full bg-gray-100 p-1"
                  activeOpacity={0.2}
                >
                  <Feather name="x" size={20} color="#777" />
                </TouchableOpacity>
              </View>

              <View className="py-3 flex flex-col gap-3">
                <View>
                  <Text className="font-semibold text-base text-gray-800 mb-2 dark:text-white">
                    Category
                  </Text>
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus && {
                        borderColor: "rgb(120,82,243)",
                        borderWidth: 2,
                      },
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={categories}
                    // search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Category"
                    searchPlaceholder="Select Category"
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setValue(item);
                      setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                      <AntDesign
                        style={styles.icon}
                        color={isFocus ? "rgb(120,82,243)" : "black"}
                        name="Safety"
                        size={20}
                      />
                    )}
                  />
                </View>

                <View>
                  <View className="flex justify-between items-center flex-row mb-3">
                    <Text className="font-semibold text-base text-gray-800 dark:text-white">
                      Price
                    </Text>
                    <View className="flex items-center gap-1 flex-row">
                      <Text className="text-xs text-gray-500">Currency</Text>
                      <Text className="dark:text-white">ETH</Text>
                      <Image
                        source={require("../assets/nfts/eth.png")}
                        alt=""
                        className="w-4 h-4"
                        resizeMode="contain"
                      />
                    </View>
                  </View>

                  <View className="flex gap-2 items-center justify-between flex-row">
                    <View className="relative flex-1">
                      <TextInput
                        type="number"
                        className="w-full outline-none text-base placeholder:text-[rgb(156 163 175)] placeholder:font-light font-normal p-3 py-2.5 focus:ring-2 focus:ring-nft-primary-light focus:bg-white border-gray-300 border-2 rounded-xl bg-white text-center"
                        placeholder="Min"
                        min={0}
                      />
                    </View>

                    <Text className="font-semibold text-gray-800">to</Text>

                    <View className="relative flex-1">
                      <TextInput
                        type="number"
                        className="w-full outline-none text-base placeholder:text-[rgb(156 163 175)] placeholder:font-light font-normal p-3 py-2.5 focus:ring-2 focus:ring-nft-primary-light focus:bg-white border-gray-300 border-2 rounded-xl bg-white text-center"
                        placeholder="Max"
                        min={0}
                      />
                    </View>
                  </View>
                </View>

                <View>
                  <View className="mb-3">
                    <Text className="font-semibold text-base text-gray-800">
                      Media Type
                    </Text>
                  </View>

                  <View className="flex gap-2 items-center justify-between flex-row">
                    <TouchableOpacity type="number" className="flex-1">
                      <Text className="text-gray-800 dark:text-white text-center font-medium p-3.5 border-gray-300 border-2 rounded-xl">
                        All
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity type="number" className="flex-1">
                      <Text className="text-white text-center font-medium p-3.5 border-nft-primary-light bg-nft-primary-light border-2 rounded-xl">
                        Image
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity type="number" className="flex-1">
                      <Text className="text-gray-800 dark:text-white text-center font-medium p-3.5 border-gray-300 border-2 rounded-xl">
                        Video
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Animated.ScrollView>

        <ScrollView className="px-3">
          {activeTab === "NFTs" ? (
            <NFTTab isDarkMode={isDarkMode} />
          ) : (
            <CollectionTab isDarkMode={isDarkMode} />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "rgb(209 213 219)",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 2,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "rgb(156 163 175)",
    fontWeight: 400,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
