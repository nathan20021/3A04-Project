import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import { CustomerEditPage } from "./Pages/Settings";

import {
  LoginPage,
  LoginErrorPage,
  LoginSuccessPage,
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
  CarpoolRequestDecision,
  CarpoolOfferSuccess,
  CarpoolOfferDeclined,
  CarpoolRequestWait,
  CarpoolOffer,
} from "./Pages/Dispatcher";

import { FareDisplay, Rating } from "./Pages/TaxiSession";
import { PromptActivation, PromptDisplay, PromptError } from "./Pages/Prompts";

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
        <Stack.Screen name="Customer Edit Page" component={CustomerEditPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Login Error" component={LoginErrorPage} />
        <Stack.Screen name="Taxi ID Input" component={TaxiIDInputPage} />
        <Stack.Screen name="Taxi Selection" component={TaxiSelectionPage} />
        <Stack.Screen name="Carpool Offer" component={CarpoolOffer} />
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
        <Stack.Screen name="Request Wait" component={CarpoolRequestWait} />
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
