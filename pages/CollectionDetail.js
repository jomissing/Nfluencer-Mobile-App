import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CollectionDetail() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white pt-7 pb-0 relative">
      <ScrollView>
        <View className="flex-col p-4 pb-0">
          <View className="flex-row items-center justify-start gap-4">
            <TouchableOpacity onPress={() => navigation.goBack("Marketplace")}>
              <AntDesign name="arrowleft" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="relative p-4 pt-2">
          <Image
            source={require("../assets/nfts/nft1.webp")}
            className="w-full object-cover h-32 rounded-2xl"
          />
          {/* <TouchableOpacity
            onPress={() => console.log("Options pressed")}
            className="absolute top-4 right-6 bg-white rounded-xl p-2 flex flex-row items-center justify-center"
          >
            <AntDesign name="heart" size={14} color="rgb(120,82,243)" />
            <Text className="text-nft-primary-light ml-1 font-bold text-sm">
              44
            </Text>
          </TouchableOpacity> */}
        </View>

        <View className="p-4 pt-0 mb-36">
          <Text className="mb-2 font-medium text-2xl text-gray-800">
            Bored Ape Yacht Club
          </Text>

          <View className="flex justify-between flex-row items-center mb-2">
            <View className="flex flex-col">
              <Text className="text-xs text-gray-500 block w-full text-center">
                Creator
              </Text>
              <View className="flex flex-row items-center gap-2">
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
              </View>
            </View>
          </View>

          <Text className="text-sm text-gray-500">
            Adjust the code based on the actual structure of your NFT objects
            and the details you want to include in the creatorDetails object.
            This example assumes that the relevant details are available in the
            nft.creator object, and you can access them directly.
          </Text>

          <View className="flex justify-center flex-row items-center my-7">
            <View
              className=" bg-white p-5 rounded-xl w-full"
              style={{
                shadowColor: "#999",
                shadowOffset: { width: 10, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 10,
              }}
            >
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
                  <Text className="text-gray-500 font-semibold text-sm">6</Text>
                </View>

                <View className="flex flex-row p-1.5 px-0 rounded-lg items-center justify-between">
                  <Text className="text-gray-500 text-sm">Token Standard</Text>
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

              <View className="flex-1 justify-between items-center flex-row w-full mt-10 border-t border-gray-200 pt-7">
                <Text className="text-2xl font-semibold text-gray-800 flex-1">
                  More from Collection
                </Text>
              </View>

              <View
                className="flex flex-col gap-2"
                style={{
                  shadowColor: "#999",
                  shadowOffset: { width: 10, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 10,
                }}
              >
                <View className="flex flex-row">
                  <Image
                    source={require("../assets/nfts/nft1.webp")}
                    className="w-1/2 h-32 object-cover rounded-2xl"
                  />

                  <View>
                    <View className="flex flex-row p-2">
                      <Image
                        source={require("../assets/nfts/nft1.webp")}
                        className="w-10 h-10 object-cover rounded-full"
                      />
                      <View className="flex flex-col justify-center ml-2">
                        <Text className="text-gray-800 font-semibold text-left w-full">
                          Bored Ape Yacht Club
                        </Text>
                        <Text className="text-gray-500 text-xs text-left w-full">
                          0x1234567890
                        </Text>
                      </View>
                    </View>

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
          </View>
        </View>
      </ScrollView>

      <View className="flex-1 gap-2 p-2 pt-0 absolute bg-white bottom-0 flex-row border-t border-gray-100">
        <TouchableOpacity className="bg-nft-primary rounded-lg p-3 flex-1 bg-nft-primary-transparent flex-row items-center justify-center space-x-2">
          <Feather name="bookmark" size={24} color="rgb(120 82 243)" />
          <Text className="text-nft-primary-light font-semibold text-center text-base">
            Save Item
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
