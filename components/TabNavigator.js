import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import { Feather, MaterialIcons, Ionicons } from "@expo/vector-icons";
import Inbox from "../pages/Inbox";
import Marketplace from "../pages/Marketplace";
import SearchServices from "../pages/Services";
import MyGigs from "./MyGigs";
import Settings from "../pages/Settings";
import { useDarkMode } from "../pages/redux/DarkModeContext";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 0,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: isDarkMode ? "#24293e" : "#fff",
          height: 50,
          margin: 0,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          borderRadius: 0,
        },
        tabBarLabelStyle: {
          padding: 0,
          // display: "none",
        },
        // tabBarLabel: "",
        tabBarActiveBackgroundColor: isDarkMode
          ? "rgba(226,221,251,0.1)"
          : "rgba(226,221,251,0.3)",
        tabBarActiveTintColor: "rgb(120,82,243)",
        tabBarInactiveTintColor: isDarkMode
          ? "rgba(96, 101, 122, 1)"
          : "#7D7C7B",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={SearchServices}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="design-services" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyGigs"
        component={MyGigs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
