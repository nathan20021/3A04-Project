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
  CarpoolRequestDecision, 
  CarpoolOfferSuccess, 
  CarpoolOfferDeclined, 
  CarpoolOfferError, 
  CarpoolOffer 
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
      <Stack.Navigator initialRouteName="Carpool Offers">
      <Stack.Screen name="Carpool Offer" component={CarpoolOffer} />
        <Stack.Screen name="Carpool Error" component={CarpoolOfferError} />
        <Stack.Screen name="Offer Success" component={CarpoolOfferSuccess} />
        <Stack.Screen name="Offer Declined" component={CarpoolOfferDeclined} />
        <Stack.Screen name="Offerer Decision" component={CarpoolRequestDecision} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
