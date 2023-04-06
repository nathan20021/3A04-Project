import { Text, View, Pressable } from "react-native";

export default LoginErrorPage = ({ navigation }) => {
  return (
    <View className="w-full min-h-[100vh] flex items-center justify-center flex-1">
      <View className="w-[80%] h-full">
        <View className="gap-3 h-full flex flex-col justify-center items-center">
          <Text>Incorrect username or password!</Text>
          <Text>Please try again!</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
            className="bg-primaryError h-9 flex items-center justify-center shadow-sm rounded-md w-full"
          >
            <Text className="text-center font-bold text-white">RETRY</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
