import React, { useState, useEffect } from "react";
import { View } from "react-native";
import StackNavigator from "./components/StackNavigator";
import SplashScreen from "./components/SplashScreen";
import { AuthProvider } from "./pages/redux/AuthContext"; // Adjust the path accordingly
import { DarkModeProvider, useDarkMode } from "./pages/redux/DarkModeContext"; // Adjust the path accordingly
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const { toggleDarkMode } = useDarkMode();
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    const getTheme = async () => {
      const theme = await AsyncStorage.getItem("colorScheme");
      if (theme) {
        setColorScheme(theme);
      }
    };

    getTheme();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <>
          <SplashScreen />
        </>
      ) : (
        <AuthProvider>
          <DarkModeProvider>
            <StackNavigator />
          </DarkModeProvider>
        </AuthProvider>
      )}
    </View>
  );
}
