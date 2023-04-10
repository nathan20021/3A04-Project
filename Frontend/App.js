import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

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
import { LocationSelectionPage } from "./Pages/Dispatcher";

import { PageTransitionConfig as config } from "./config";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Login Error" component={LoginErrorPage} />
        <Stack.Screen
          name="Registration Error"
          component={RegistrationErrorPage}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="Location Selection"
          component={LocationSelectionPage}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="Registration Success"
          component={RegistrationSuccessPage}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
