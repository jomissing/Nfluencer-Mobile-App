import React, { useState, useEffect } from "react";
import { View } from "react-native";
import StackNavigator from "./components/StackNavigator";
import SplashScreen from "./components/SplashScreen";
import { AuthProvider } from "./pages/redux/AuthContext"; // Adjust the path accordingly

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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
          <StackNavigator />
        </AuthProvider>
      )}
    </View>
  );
}
