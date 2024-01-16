import React, { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { useAuth } from "./redux/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import EarningsChart from "../components/EarningsChart";
// import { APP_API_URL } from "@env";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  const { userDetails, setUserDetails, clearUserDetails } = useAuth();
  const APP_API_URL = Constants.manifest.extra.APP_API_URL;
  const navigation = useNavigation();
  const [ordersAsSeller, setOrdersAsSeller] = useState([]);
  const [ordersAsBuyer, setOrdersAsBuyer] = useState([]);
  const [earningseries, setearningSeries] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [totalProfits, setTotalProfits] = useState(0);
  const [lastMonthProfits, setLastMonthProfits] = useState(0);
  const [profitRisePercentage, setProfitRisePercentage] = useState(0);
  const [totalNewOrders, setTotalNewOrders] = useState(0);
  const [percentIncrease, setPercentIncrease] = useState(0);
  const [totalOrdersLastMonth, setTotalOrdersLastMonth] = useState(0);
  const [overviewOrders, setOverviewOrders] = useState([]);
  const [earningOverview, setearningOverview] = useState([]);

  const topSellers = [
    {
      name: "Rohit Sharma",
      totalItems: 10,
      totalEarnings: 0.49,
      image: require("../assets/nfts/memberships.webp"),
    },
    {
      name: "Rohit Sharma",
      totalItems: 10,
      totalEarnings: 0.49,
      image: require("../assets/nfts/pfps.webp"),
    },
  ];

  // redirect user to login if not logged in
  useEffect(() => {
    if (!userDetails) {
      navigation.navigate("Login");
    }
  }, [userDetails]);

  const getUserOrdersAsSeller = async () => {
    const res = await fetch(`${APP_API_URL}/api/gig/getUserOrdersAsSeller`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userDetails.jwtToken,
      },
      body: JSON.stringify({
        userId: userDetails._id,
      }),
    });
    const data = await res.json();
    if (data.error) {
      return;
    }
    setOrdersAsSeller(data);
  };

  const getUserOrdersAsBuyer = async () => {
    const res = await fetch(`${APP_API_URL}/api/gig/getUserOrdersAsBuyer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": userDetails.jwtToken,
      },
      body: JSON.stringify({
        userId: userDetails._id,
      }),
    });
    const data = await res.json();
    if (data.error) {
      return;
    }
    setOrdersAsBuyer(data);
  };

  const getEarnings = () => {
    const acceptedOrders = ordersAsSeller.filter(
      (order) => order.isDeliveryAccepted && order.gig !== null
    );
    const earningsByMonth = acceptedOrders.reduce((result, order) => {
      const month = new Date(order.createdAt).getMonth();
      result[month] = (result[month] || 0) + order.totalPrice;
      return result;
    }, {});

    const earnings = Array.from(
      { length: 12 },
      (_, index) => earningsByMonth[index] || 0
    );

    setearningSeries(earnings);
  };

  useEffect(() => {
    if (userDetails) {
      getUserOrdersAsBuyer();
      getUserOrdersAsSeller();
    }

    if (ordersAsSeller) {
      getEarnings();
    }
  }, [userDetails]);

  useEffect(() => {
    const allOrders = [...ordersAsSeller, ...ordersAsBuyer];
    const sortedOrders = allOrders.sort((a, b) => {
      const dateA = new Date(a.orderEndDate).getTime();
      const dateB = new Date(b.orderEndDate).getTime();
      return dateA - dateB;
    });
    const filteredOrders = sortedOrders.slice(0, 4);
    setOverviewOrders(filteredOrders);
  }, [ordersAsSeller, ordersAsBuyer]);

  useEffect(() => {
    const allOrders = [...ordersAsSeller, ...ordersAsBuyer];
    const sortedOrders = allOrders.sort((a, b) => {
      const dateA = new Date(a.orderEndDate).getTime();
      const dateB = new Date(b.orderEndDate).getTime();
      return dateA - dateB;
    });
    const filteredOrders = sortedOrders
      .filter((item) => item.isDeliveryAccepted)
      .slice(0, 4);

    setearningOverview(filteredOrders);
  }, [ordersAsSeller, ordersAsBuyer]);

  useEffect(() => {
    const currentDate = new Date();
    const lastMonthStartDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    const lastMonthEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const lastMonthOrders = ordersAsSeller.filter(
      (order) =>
        order.orderAccepted &&
        order.orderCompleted &&
        new Date(order.orderEndDate) >= lastMonthStartDate &&
        new Date(order.orderEndDate) <= lastMonthEndDate
    );
    const allProfits = ordersAsSeller.reduce(
      (total, order) => total + order.totalPrice,
      0
    );
    setTotalProfits(allProfits);
    const lastMonthProfitsTotal = lastMonthOrders.reduce(
      (total, order) => total + order.totalPrice,
      0
    );
    setLastMonthProfits(lastMonthProfitsTotal);
    const percentageRise =
      ((lastMonthProfitsTotal - allProfits) / allProfits) * 100;
    setProfitRisePercentage(percentageRise);
  }, [ordersAsSeller, ordersAsBuyer]);

  useEffect(() => {
    const currentDate = new Date();
    const lastMonthStartDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    const lastMonthEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const lastMonthOrders = ordersAsSeller.filter(
      (order) =>
        order.orderAccepted &&
        order.orderCompleted &&
        new Date(order.orderEndDate) >= lastMonthStartDate &&
        new Date(order.orderEndDate) <= lastMonthEndDate
    );
    const totalNewOrdersCount = ordersAsSeller.filter(
      (order) => order.isNewCustomer
    ).length;
    setTotalNewOrders(totalNewOrdersCount);
    setTotalOrdersLastMonth(lastMonthOrders.length);
    const totalOrdersCount = ordersAsSeller.length;
    const percentageIncrease =
      ((totalOrdersLastMonth - totalNewOrders) / totalNewOrders) * 100;
    setPercentIncrease(percentageIncrease);
  }, [ordersAsSeller, totalOrdersLastMonth, totalNewOrders]);

  if (!userDetails) {
    return (
      <View className="flex-1 justify-center items-center w-full h-full">
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View className="flex-1 bg-white">
        {/* Top Bar */}
        <View className="flex-row justify-between items-center p-4 pt-0">
          <Text className="text-2xl font-bold text-gray-800">
            {userDetails["name"]}
          </Text>
          <Image
            source={{ uri: userDetails["avatar"] }}
            className="w-12 h-12 object-cover block bg-gray-200 rounded-full"
          />
        </View>

        <ScrollView>
          <View className="p-4 pt-0 pb-12">
            <View className="flex flex-col">
              <View className="flex flex-row">
                <View
                  className="bg-nft-primary-light rounded-xl m-2 items-center flex-1"
                  style={{
                    shadowColor: "#999",
                    shadowOffset: { width: 10, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 10,
                  }}
                >
                  <View className="p-4 items-center">
                    <View className="flex flex-row items-baseline space-x-2 mb-2">
                      <Text className="text-3xl font-bold text-white">12</Text>
                      <View className="flex flex-row space-x-1 items-center bg-green-100 rounded-full px-1">
                        <Feather
                          name="trending-up"
                          size={8}
                          color="rgb(22 101 52)"
                        />
                        <Text className="text-green-800 text-xs">1.5%</Text>
                      </View>
                    </View>
                    <Text className="text-sm text-white font-normal">
                      Total Views
                    </Text>
                  </View>
                </View>

                <View
                  className="bg-nft-primary-light rounded-xl m-2 items-center flex-1"
                  style={{
                    shadowColor: "#999",
                    shadowOffset: { width: 10, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 10,
                  }}
                >
                  <View className="p-4 items-center">
                    <View className="flex flex-row items-baseline space-x-2 mb-2">
                      <Text className="text-3xl font-bold text-white">
                        ${totalProfits}
                      </Text>
                    </View>
                    <Text className="text-sm text-white font-normal">
                      Total Profits
                    </Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-row">
                <View
                  className="bg-nft-primary-light rounded-xl m-2 items-center flex-1"
                  style={{
                    shadowColor: "#999",
                    shadowOffset: { width: 10, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 10,
                  }}
                >
                  <View className="p-4 items-center">
                    <View className="flex flex-row items-baseline space-x-2 mb-2">
                      <Text className="text-3xl font-bold text-white">
                        {totalNewOrders}
                      </Text>
                    </View>
                    <Text className="text-sm text-white font-normal">
                      New Customers
                    </Text>
                  </View>
                </View>

                <View
                  className="bg-nft-primary-light rounded-xl m-2 items-center flex-1"
                  style={{
                    shadowColor: "#999",
                    shadowOffset: { width: 10, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 10,
                  }}
                >
                  <View className="p-4 items-center">
                    <View className="flex flex-row items-center mb-2">
                      <Text className="text-3xl font-bold text-white">
                        {ordersAsBuyer.length + ordersAsSeller.length}
                      </Text>
                    </View>
                    <Text className="text-sm text-white font-normal">
                      Running Orders
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="mt-8">
              <Text className="text-lg font-bold text-gray-800 mb-3">
                Recent Orders
              </Text>

              <View className="flex flex-col gap-y-3 px-0 mt-1">
                {overviewOrders.map((order, index) => (
                  <View
                    key={index}
                    className="flex justify-between items-center flex-row py-5 rounded-xl px-3"
                    style={{
                      backgroundColor: "#fff",
                      shadowColor: "#999",
                      shadowOffset: { width: 10, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 10,
                    }}
                  >
                    <View className="flex items-center flex-row gap-2">
                      <Image
                        source={{
                          uri: order["seller"]["avatar"],
                        }}
                        className="w-12 h-12 rounded-full"
                      />
                      <View className="flex flex-col items-center justify-start">
                        <Text className="text-left w-full font-bold text-lg text-gray-800">
                          {order["gig"]["title"].substring(0, 10)}...
                        </Text>
                        <Text className="text-left w-full font-normal text-xs text-gray-500">
                          {new Date(order["orderEndDate"]).toLocaleDateString()}
                        </Text>
                      </View>
                    </View>

                    <View className="flex flex-row">
                      <View className="flex flex-col justify-start">
                        <Text className="text-xl font-bold">
                          ${order["totalPrice"]}
                        </Text>
                        <Text className="text-left w-full font-normal text-xs text-gray-500">
                          Buyer: {order["seller"]["name"]}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            <View className="mt-8">
              <Text className="text-lg font-bold text-gray-800 mb-3">
                Earnings Overview
              </Text>
              {earningseries && <EarningsChart chartData={earningseries} />}

              <View className="flex flex-col gap-y-3 px-0 mt-1">
                {earningOverview.map((order, index) => (
                  <View
                    key={index}
                    className="flex justify-between items-center flex-row py-5 rounded-xl px-3"
                    style={{
                      backgroundColor: "#fff",
                      shadowColor: "#999",
                      shadowOffset: { width: 10, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 10,
                    }}
                  >
                    <View className="flex items-center flex-row gap-2">
                      <Image
                        source={{
                          uri: order["gig"]["images"][0],
                        }}
                        className="w-12 h-12 rounded-full"
                      />
                      <View className="flex flex-col items-center justify-start">
                        <Text className="text-left w-full font-bold text-lg text-gray-800">
                          {order["gig"]["title"].substring(0, 10)}...
                        </Text>
                        <Text className="text-left w-full font-normal text-xs text-gray-500">
                          {new Date(order["orderEndDate"]).toLocaleDateString()}
                        </Text>
                      </View>
                    </View>

                    <View className="flex flex-row">
                      <View className="flex flex-col justify-start">
                        <Text className="text-xl font-bold">
                          ${order["totalPrice"]}
                        </Text>
                        <Text className="text-left w-full font-normal text-xs text-gray-500">
                          Buyer: {order["seller"]["name"]}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
