import { Text, View, Pressable } from "react-native";

export default RegistrationErrorPage = () => {
  return (
    <View className="gap-3 h-full w-full flex justify-center">
      <Text className="text-center font-bold">Welcome to Oober! 😁</Text>
      <Text className="text-center font-bold">Registration Successful! 🎉</Text>
      <Pressable className="bg-primarySuccess h-9 flex items-center justify-center shadow-sm rounded-md w-full">
        <Text className="text-center font-bold text-white">
          CONTINUE TO APP
        </Text>
      </Pressable>
    </View>
  );
};
