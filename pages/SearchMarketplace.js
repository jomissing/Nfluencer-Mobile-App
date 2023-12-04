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

export default function SearchMarketplace({ navigation }) {
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

  // const categories = [
  //   { name: "All" },
  //   { name: "Art" },
  //   { name: "Gaming" },
  //   { name: "Memberships" },
  //   { name: "PFPs" },
  //   { name: "Photography" },
  //   { name: "Music" },
  // ];

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

  return (
    <View className="flex-1 bg-white pt-7 pb-7">
      {/* Top Bar */}
      <View className="flex-col p-4">
        <View className="flex-row items-center justify-start gap-4">
          <TouchableOpacity onPress={() => navigation.navigate("Marketplace")}>
            <AntDesign name="arrowleft" size={24} color="#333" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-gray-800">
            Search Marketplace
          </Text>
        </View>

        <View className="flex flex-row items-center gap-3 mt-1">
          <TouchableOpacity
            onPress={isSidebarOpen ? closeSidebar : openSidebar}
            className="bg-gray-100 p-4 rounded-xl"
          >
            <Ionicons name="filter-outline" size={24} color="#333" />
          </TouchableOpacity>

          <View className="flex-1 relative">
            <TextInput
              className=" text-gray-800 text-base font-normal p-3 bg-white border-2 border-gray-400 rounded-xl"
              placeholder="Search..."
              placeholderTextColor="rgb(156 163 175)"
            />
            <View className="absolute top-3.5 right-2 block">
              <AntDesign name="search1" size={24} color="rgb(156 163 175)" />
            </View>
          </View>
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
            backgroundColor: "white",
            zIndex: 100,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        ]}
      >
        <View className="w-full h-full p-10 px-5 pt-5">
          <ScrollView>
            <View className="flex justify-between items-center flex-row border-b border-gray-200 pb-3">
              <Text className="font-semibold text-lg">Filters</Text>
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
                <Text className="font-semibold text-base text-gray-800 mb-2">
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
                  <Text className="font-semibold text-base text-gray-800">
                    Price
                  </Text>
                  <View className="flex items-center gap-1 flex-row">
                    <Text className="text-xs text-gray-500">Currency</Text>
                    <Text>ETH</Text>
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
                      className="w-full outline-none text-base placeholder:text-[rgb(156 163 175)] placeholder:font-light font-normal p-3 focus:ring-2 focus:ring-nft-primary-light focus:bg-white border-gray-300 border-2 rounded-xl bg-white text-center"
                      placeholder="Min"
                      min={0}
                    />
                  </View>

                  <Text className="font-semibold text-gray-800">to</Text>

                  <View className="relative flex-1">
                    <TextInput
                      type="number"
                      className="w-full outline-none text-base placeholder:text-[rgb(156 163 175)] placeholder:font-light font-normal p-3 focus:ring-2 focus:ring-nft-primary-light focus:bg-white border-gray-300 border-2 rounded-xl bg-white text-center"
                      placeholder="Max"
                      min={0}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Animated.ScrollView>

      <ScrollView className="px-3"></ScrollView>
    </View>
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
