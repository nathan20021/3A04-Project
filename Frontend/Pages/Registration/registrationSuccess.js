import { Text, View, Pressable } from "react-native";

export default RegistrationErrorPage = ({ navigation }) => {
  return (
    <View className="w-full min-h-[100vh] flex items-center justify-center flex-1">
      <View className="w-[80%] h-full">
        <View className="gap-3 h-full w-full flex justify-center">
          <Text className="text-center font-bold text-[23px]">
            Welcome to Oober! 😁
          </Text>
          <Text className="text-center text-gray-900">
            Registration Successful! 🎉
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Registration Error");
            }}
            className="bg-primarySuccess h-9 flex items-center justify-center shadow-sm rounded-md w-full"
          >
            <Text className="text-center font-bold text-white">
              CONTINUE TO APP
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
