import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PromptActivationPage from "./Pages/Prompts/PromptActivation"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <PromptActivationPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#ffffff",
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
