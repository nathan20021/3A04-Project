import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  LoginPage,
  LoginSuccessPage,
  LoginErrorPage,
  LogoutPage,
} from "./Pages/Auth";
import {
  RegistrationPage,
  RegistrationErrorPage,
  RegistrationSuccessPage,
} from "./Pages/Registration";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View className="w-full min-h-[100vh] flex items-center justify-center flex-1">
          <View className="w-[80%] h-full">
            {/* <LoginPage /> */}
            <RegistrationPage />
            {/* <LoginErrorPage /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
