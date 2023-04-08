import { LoginPage, LoginSuccessPage, LoginErrorPage, LogoutPage} from "./Pages/Auth";
import { RegistrationPage, RegistrationErrorPage, RegistrationSuccessPage } from "./Pages/Registration";
import { LocationSelectionPage } from "./Pages/Dispatcher";
import { FareDisplay, Rating } from "./Pages/TaxiSession";
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
      <Stack.Navigator initialRouteName = "Taxi Session">
        <Stack.Screen name = "Fare Display" component = {FareDisplay} />
        <Stack.Screen name = "Rating" component = {Rating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
