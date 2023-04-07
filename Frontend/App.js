import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./Pages/Auth/login";
import LoginErrorPage from "./Pages/Auth/loginError";
import LoginSuccessPage from "./Pages/Auth/loginSuccess";
import FareDisplay from "./Pages/TaxiSession/fareDisplay";


export default function App() {
  return (
    <View className="flex items-center justify-center flex-1">
      <StatusBar style="auto" />
      <View>
        {/* <LoginPage /> */}
        {/* <LoginSuccessPage /> */}
        <FareDisplay/>

      </View>
    </View>
  );
}