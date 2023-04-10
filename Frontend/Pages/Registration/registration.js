import React, { useState } from "react";
import axios from "axios";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { PromptPerf } from "../../declaration";
import PromptPerfCard from "../../Components/PromptPerfCard";
import { LOCAL_HOST_IP } from "@env";

export default RegistrationPage = ({ navigation }) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "01/01/2000",
    promptPerf: Array(Object.keys(PromptPerf).length).fill(false),
  });

  const submit = () => {
    //TODO
  };

  const register = () => {
    // navigation.navigate("Registration Success");
    console.log(`http://${LOCAL_HOST_IP}:3000/users/register`);
    axios
      .post(`http://${LOCAL_HOST_IP}:3000/users/register`, {
        username: formState.username,
        password: formState.password,
        email: formState.email,
      })
      .then((res) => {
        navigation.navigate("Registration Success");
        console.log(res);
      })
      .catch((err) => {
        navigation.navigate("Registration Error");
        console.log(err);
      });
  };

  const validateNewUser = () => {
    //TODO
    return true;
  };

  return (
    <ScrollView>
      <View className="w-full min-h-[100vh] flex items-center justify-center flex-1">
        <View className="w-[80%] h-full">
          <View className="gap-3 py-10 flex justify-center">
            <View id="form-header">
              <Text className="font-bold text-center text-lg mb-2">
                Become a member!
              </Text>
            </View>
            <SafeAreaView className="flex flex-col gap-y-5">
              <View>
                <Text className="font-bold mb-1">Username</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10"
                  onChangeText={(e) => {
                    setFormState({ ...formState, username: e });
                  }}
                  value={formState.username}
                  placeholder=""
                />
              </View>
              <View>
                <Text className="font-bold mb-1">Email</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
                  onChangeText={(e) => {
                    setFormState({ ...formState, email: e });
                  }}
                  value={formState.email}
                  placeholder="example@xyz.com"
                />
              </View>
              <View>
                <Text className="font-bold mb-1">Birth Date (dd-mm-yyyy)</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
                  onChangeText={(e) => {
                    setFormState({ ...formState, birthDate: e });
                  }}
                  value={formState.birthDate}
                  placeholder="01/01/2000"
                />
              </View>
              <View>
                <Text className="font-bold mb-1">Password</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
                  secureTextEntry={true}
                  onChangeText={(e) => {
                    setFormState({ ...formState, password: e });
                  }}
                  value={formState.password}
                  placeholder="password"
                />
              </View>
              <View>
                <Text className="font-bold mb-1">Confirm Password</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
                  secureTextEntry={true}
                  onChangeText={(e) => {
                    setFormState({ ...formState, confirmPassword: e });
                  }}
                  value={formState.confirmPassword}
                />
              </View>

              <View className="relative my-2">
                <View className="absolute border-b-2 border-b-[#c0c0c0] w-full top-[50%]"></View>
                <View className="flex items-center justify-center">
                  <Text className="text-center bg-[#ffffff] px-3 font-bold">
                    What's your prompting preference?
                  </Text>
                </View>
              </View>
              <View className="flex flex-row flex-wrap w-full">
                {Object.keys(PromptPerf).map((key, index) => {
                  return (
                    <PromptPerfCard
                      key={index}
                      text={PromptPerf[key]}
                      boolean={formState.promptPerf[index]}
                      onPress={() => {
                        const newPromptPerf = [...formState.promptPerf];
                        newPromptPerf[index] = !newPromptPerf[index];
                        setFormState({
                          ...formState,
                          promptPerf: newPromptPerf,
                        });
                      }}
                    />
                  );
                })}
              </View>
              <View className="flex items-center">
                <Pressable
                  onPress={register}
                  className="bg-primary h-9 flex items-center justify-center shadow-sm rounded-md w-full"
                >
                  <Text className="text-center font-bold text-[#ffffff]">
                    SUBMIT
                  </Text>
                </Pressable>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
