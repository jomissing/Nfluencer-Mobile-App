import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Welcome from "../pages/Welcome";
import TabNavigator from "./TabNavigator";
import MovieDetails from "../pages/MovieDetails";
import Watch from "../pages/Watch";
import All from "../pages/All";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";
import EmailConfirmation from "../pages/EmailConfirmation";
import Inbox from "../pages/Inbox";
import Chat from "../pages/Chat";
import Marketplace from "../pages/Marketplace";
import SearchMarketplace from "../pages/SearchMarketplace";
import NFTDetail from "../pages/NFTDetail";
import CollectionDetail from "../pages/CollectionDetail";
import GigDetails from "../pages/GigDetails";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Check if the Welcome page has been shown before
    AsyncStorage.getItem("hasShownWelcome")
      .then((value) => {
        if (value === "true") {
          setShowWelcome(false);
        }
      })
      .catch((error) => {
        console.log("AsyncStorage error:", error);
      });
  }, []);

  const handleWelcomeDismiss = () => {
    // Set the flag to indicate that the Welcome page has been shown
    AsyncStorage.setItem("hasShownWelcome", "true")
      .then(() => {
        setShowWelcome(false);
      })
      .catch((error) => {
        console.log("AsyncStorage error:", error);
      });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={showWelcome ? "Welcome" : "Main"}
        screenOptions={{ headerShown: false }}
      >
        {showWelcome ? (
          <Stack.Screen name="Welcome">
            {(props) => <Welcome {...props} onDismiss={handleWelcomeDismiss} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Main" component={TabNavigator} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
            <Stack.Screen name="Watch" component={Watch} />
            <Stack.Screen name="All" component={All} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="UserDetails" component={UserDetails} />
            <Stack.Screen
              name="EmailConfirmation"
              component={EmailConfirmation}
            />
            <Stack.Screen name="Inbox" component={Inbox} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Marketplace" component={Marketplace} />
            <Stack.Screen
              name="SearchMarketplace"
              component={SearchMarketplace}
            />
            <Stack.Screen name="NFTDetail" component={NFTDetail} />
            <Stack.Screen name="GigDetails" component={GigDetails} />
            <Stack.Screen
              name="CollectionDetail"
              component={CollectionDetail}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
