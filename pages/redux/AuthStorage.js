import AsyncStorage from "@react-native-async-storage/async-storage";

// Save user details
const saveUserDetails = async (userDetails) => {
  try {
    await AsyncStorage.setItem("userDetails", JSON.stringify(userDetails));
  } catch (error) {
    console.error("Error saving user details:", error);
  }
};

// Retrieve user details
const getUserDetails = async () => {
  try {
    const userDetailsString = await AsyncStorage.getItem("userDetails");
    return JSON.parse(userDetailsString);
  } catch (error) {
    console.error("Error getting user details:", error);
    return null;
  }
};

// Remove user details (on logout, for example)
const removeUserDetails = async () => {
  try {
    await AsyncStorage.removeItem("userDetails");
  } catch (error) {
    console.error("Error removing user details:", error);
  }
};
