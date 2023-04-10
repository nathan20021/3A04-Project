import { Text, View, TextInput, SafeAreaView, Pressable } from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import axios from "axios";
import { LOCAL_HOST_IP } from "@env";

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const login = () => {
    console.log(`http://${LOCAL_HOST_IP}:3000/users/login`);
    axios
      .post(`http://${LOCAL_HOST_IP}:3000/users/login`, {
        username: username,
        password: password,
      })
      .then(() => {
        navigation.navigate("Location Selection");
      })
      .catch(() => {
        navigation.navigate("Login Error");
      });
  };
  return (
    <View className="w-full min-h-[100vh] flex items-center justify-center flex-1">
      <View className="w-[80%] h-full mt-52">
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
                onChangeText={setUsername}
                value={username}
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
                <Text className="font-bold text-primary">Forget password?</Text>
              </Pressable>
            </View>
            <View className="flex items-center">
              <Pressable
                onPress={login}
                className="bg-primary h-9 flex items-center justify-center shadow-sm rounded-md w-full"
              >
                <Text className="text-center font-bold text-white">LOG IN</Text>
              </Pressable>
            </View>
          </SafeAreaView>
          <View className="flex flex-col gap-3 mt-6">
            <View className="relative">
              <View className="absolute border-b-2 border-b-[#c0c0c0] w-full top-[50%]"></View>
              <View className="flex items-center justify-center">
                <Text className="text-center bg-[#ffffff] px-3">
                  Not a member?
                </Text>
              </View>
            </View>
            <View className="flex items-center">
              <Pressable
                onPress={() => navigation.navigate("Registration")}
                className="bg-[#ffffff] border-2 border-primary h-9 flex items-center justify-center shadow-sm rounded-md w-full"
              >
                <Text className="text-center font-bold text-primary">
                  SIGN UP
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
