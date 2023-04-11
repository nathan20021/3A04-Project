import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import { CustomerEditPage } from "./Pages/Settings";

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
import {
  LocationSelectionPage,
  TaxiIDInputPage,
  TaxiSelectionPage,
  LocationSelectionPage,
  CarpoolRequestDecision,
  CarpoolOfferSuccess,
  CarpoolOfferDeclined,
  CarpoolOfferError,
  CarpoolOffer,
} from "./Pages/Dispatcher";

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
      <Stack.Navigator initialRouteName="Taxi ID Input">
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="Customer Edit Page" component={CustomerEditPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Login Error" component={LoginErrorPage} />
        <Stack.Screen name="Taxi ID Input" component={TaxiIDInputPage} />
        <Stack.Screen name="Taxi Selection" component={TaxiSelectionPage} />
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
        <Stack.Screen name="Fare Display" component={FareDisplay} />
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="Prompt Activate" component={PromptActivation} />
        <Stack.Screen name="Prompt Display" component={PromptDisplay} />
        <Stack.Screen name="Prompt Error" component={PromptError} />
        <Stack.Screen name="Carpool Error" component={CarpoolOfferError} />
        <Stack.Screen name="Offer Success" component={CarpoolOfferSuccess} />
        <Stack.Screen name="Offer Declined" component={CarpoolOfferDeclined} />
        <Stack.Screen
          name="Offerer Decision"
          component={CarpoolRequestDecision}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
