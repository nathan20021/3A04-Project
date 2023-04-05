import { Text, View, Pressable } from "react-native";

export default RegistrationErrorPage = () => {
  return (
    <View className="gap-3 h-full w-full flex justify-center">
      <Text>Registration Failed!</Text>
      <Text>Please try again!</Text>
      <Pressable className="bg-primaryError h-9 flex items-center justify-center shadow-sm rounded-md w-full">
        <Text className="text-center font-bold text-white">RETRY</Text>
      </Pressable>
    </View>
  );
};
