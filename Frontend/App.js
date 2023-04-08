import {  LoginPage,  LoginSuccessPage,  LoginErrorPage,  LogoutPage } from "./Pages/Auth";
import {   RegistrationPage,  RegistrationErrorPage,  RegistrationSuccessPage, } from "./Pages/Registration";
import{ PromptActivation,  PromptDisplay,   PromptError } from "./Pages/Prompts"
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
      <Stack.Navigator initialRouteName="Prompt Generator">
        <Stack.Screen name="Prompt Activate" component={PromptActivation}/>
        <Stack.Screen name="Prompt Display" component={PromptDisplay} />
        <Stack.Screen name="Prompt Error" component={PromptError} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
