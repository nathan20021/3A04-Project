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
import{
  PromptActivation,
  PromptDisplay,
  PromptError
} from "./Pages/Prompts"
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
      <Stack.Navigator initialRouteName="Location Selection">
        <Stack.Screen name="Registration" component={PromptDisplay} />
        {/* <Stack.Screen
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
        /> */}
      </Stack.Navigator>

      {/* <Stack.Navigator initialRouteName="Prompt Generator">
        <Stack.Screen name="Prompt Start" component={PromptActivation} />
        /* <Stack.Screen
          name="Prompt Error"
          component={PromptError}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="Prompt Display"
          component={PromptDisplay}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
