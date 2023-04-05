import { Text, View, Pressable } from "react-native";

export default LoginErrorPage = () => {
  return (
    <View className="gap-3">
      <Text>Incorrect username or password!</Text>
      <Text>Please try again!</Text>
      <Pressable className="bg-primaryError h-9 flex items-center justify-center shadow-sm rounded-md w-full">
        <Text className="text-center font-bold text-white">RETRY</Text>
      </Pressable>
    </View>
  );
};
