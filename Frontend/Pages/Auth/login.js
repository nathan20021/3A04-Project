import { Text, View, TextInput, SafeAreaView, Pressable } from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  return (
    <View>
      <View>
        <Text className="font-bold text-center text-lg mb-2">
          &gt;_ Welcome back
        </Text>
      </View>
      <SafeAreaView className="flex flex-col gap-5">
        <View>
          <Text className="font-bold mb-1">Email</Text>
          <TextInput
            className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
            onChangeText={setEmail}
            value={email}
            placeholder="example@xyz.com"
          />
        </View>
        <View>
          <Text className="font-bold mb-1">Password</Text>
          <TextInput
            className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
            placeholder="password"
          />
        </View>
        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-2">
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4592fe" : undefined}
            />
            <Text className="font-bold">Remember me</Text>
          </View>
          <Pressable>
            <Text className="font-bold text-[#4592fe]">Forget password?</Text>
          </Pressable>
        </View>
        <View className="flex items-center">
          <Pressable className="bg-[#4592fe] h-9 flex items-center justify-center shadow-sm rounded-md w-full">
            <Text className="text-center font-bold text-white">LOG IN</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <View className="flex flex-col gap-3 mt-6">
        <View className="relative">
          <View className="absolute border-b-2 border-b-[#c0c0c0] w-full top-[50%]"></View>
          <View className="flex items-center justify-center">
            <Text className="text-center bg-white px-3">Not a member?</Text>
          </View>
        </View>
        <View className="flex items-center">
          <Pressable className="bg-[#ffffff] border-2 border-[#4592fe] h-9 flex items-center justify-center shadow-sm rounded-md w-full">
            <Text className="text-center font-bold text-[#4592fe]">
              SIGN UP
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
