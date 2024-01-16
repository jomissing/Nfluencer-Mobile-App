import React, { useState, useRef, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
// import { APP_API_URL } from "@env";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchServices() {
  const navigation = useNavigation();
  const APP_API_URL = Constants.manifest.extra.APP_API_URL;

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
      label: "Influencer Services",
      value: "2",
    },
    {
      label: "Live Streaming",
      value: "3",
    },
    {
      label: "Music Services",
      value: "4",
    },
    {
      label: "Art Services",
      value: "5",
    },
    {
      label: "Consulting Services",
      value: "6",
    },
    {
      label: "Coaching Services",
      value: "7",
    },
  ];

  const [value, setValue] = useState(categories[0]);
  const [isFocus, setIsFocus] = useState(false);

  const [gigs, setGigs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const fetchGigs = async () => {
    try {
      const response = await fetch(`${APP_API_URL}/api/gig/getallgigs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setGigs(data.gigs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGigs();
  }, []);

  const filteredGigs = gigs
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) => {
      if (value.label.includes("All") || value.label.length === 0) {
        return true;
      }
      return value.label.includes(item.category);
    });

  const gigDetails = (id) => {
    navigation.navigate("GigDetails", { gig_id: id });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-1 bg-white">
        {/* Top Bar */}
        <View className="flex-col p-4 pt-0">
          <View className="flex-row items-center justify-start gap-4">
            <Text className="text-2xl font-bold text-gray-800">
              Search Services
            </Text>
          </View>

          <View className="flex flex-row items-center gap-3 mt-1">
            <View className="flex-1 relative">
              <TextInput
                className=" text-gray-800 text-base font-normal p-3 bg-white border-2 border-gray-300 rounded-xl"
                placeholder="Search..."
                placeholderTextColor="rgb(156 163 175)"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
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
              className="bg-gray-100 p-4 rounded-xl"
            >
              <Ionicons name="filter-outline" size={24} color="#333" />
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
              </View>
            </ScrollView>
          </View>
        </Animated.ScrollView>

        <ScrollView className="px-3">
          <View className="flex flex-row flex-wrap items-start">
            {filteredGigs.map(
              (gig, index) =>
                gig["user"] && (
                  <TouchableOpacity
                    onPress={() => gigDetails(gig._id)}
                    className=""
                    style={{ width: "50%" }}
                    key={index}
                  >
                    <View className="w-40 m-3">
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
                            source={{
                              uri: gig["images"][0],
                            }}
                            className="w-full object-cover h-40 rounded-t-2xl rounded-b-2xl"
                          />
                          <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-xl p-2 flex flex-row items-center justify-center">
                            <AntDesign
                              name="heart"
                              size={14}
                              color="rgb(120,82,243)"
                            />
                            <Text className="text-nft-primary-light ml-1 font-bold text-sm">
                              {0}
                            </Text>
                          </TouchableOpacity>
                        </View>

                        <View className="p-2 pt-1">
                          <Text className="mb-2 font-medium text-base text-gray-800">
                            {gig["title"].substring(0, 35)}..
                          </Text>

                          <View className="flex justify-between flex-row items-center">
                            <View className="flex flex-row items-center gap-1">
                              <Image
                                source={{
                                  uri: gig["user"]["avatar"],
                                }}
                                className="w-10 h-10 object-cover rounded-full"
                              />
                              <View className="flex flex-col justify-start items-center">
                                <Text className="text-gray-800 font-semibold text-left w-full text-xs">
                                  {gig["user"]["username"]}
                                </Text>
                              </View>
                            </View>
                          </View>

                          <View className="flex flex-row items-end gap-1 ">
                            <View className="flex items-center justify-start gap-1 flex-row">
                              <Text className="text-base font-bold pt-2">
                                <Text className="text-xs font-normal text-gray-500">
                                  starts from
                                </Text>{" "}
                                ${gig["packages"]["basic"]["price"]}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
            )}
          </View>
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
