import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PromptActivationPage from "./Pages/Prompts/PromptActivation";
import LoginPage from "./Pages/Auth/Login";

export default function App() {
  return (
    <View className="flex items-center justify-center flex-1">
      <StatusBar style="auto" />
      <View className="w-[80%]">
        <LoginPage />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     color: "#ffffff",
//     backgroundColor: '#f3f3f3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
