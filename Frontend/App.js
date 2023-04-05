import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./Pages/Auth/Login";
import LoginErrorPage from "./Pages/Auth/LoginError";

export default function App() {
  return (
    <View className="flex items-center justify-center flex-1">
      <StatusBar style="auto" />
      <View className="w-[80%]">
        {/* <LoginPage /> */}
        <LoginErrorPage/>
      </View>
    </View>
  );
}