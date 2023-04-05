import React from "react";
import { View, Text, Pressable } from "react-native";

export default LoginErrorPage = () => {
  return (
    <View className="gap-3">
      <Text>Logout from this device</Text>
      <Pressable className="bg-primaryError h-9 flex items-center justify-center shadow-sm rounded-md w-full">
        <Text className="text-center font-bold text-white">LOGOUT</Text>
      </Pressable>
    </View>
  );
};
