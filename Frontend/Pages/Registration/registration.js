import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  Pressable,
  Button,
} from "react-native";
import { PromptPerf } from "../../declaration";
import PromptPerfCard from "../../Components/PromptPerfCard";
import DateTimePicker from "@react-native-community/datetimepicker";

export default RegistrationPage = () => {
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
    //TODO
    console.log("hahaha");
  };

  const validateNewUser = () => {
    //TODO
    return true;
  };

  return (
    <View className="gap-3 py-10 flex justify-center">
      <View id="form-header">
        <Text className="font-bold text-center text-lg mb-2">
          Become a member!
        </Text>
      </View>
      <SafeAreaView id="form" className="flex flex-col gap-5">
        <View>
          <Text className="font-bold mb-1">Username</Text>
          <TextInput
            autoCapitalize="none"
            className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
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
        <View className="flex flex-row flex-wrap gap-5 w-full">
          {Object.keys(PromptPerf).map((key, index) => {
            return (
              <PromptPerfCard
                key={index}
                text={PromptPerf[key]}
                boolean={formState.promptPerf[index]}
                onPress={() => {
                  const newPromptPerf = [...formState.promptPerf];
                  newPromptPerf[index] = !newPromptPerf[index];
                  setFormState({ ...formState, promptPerf: newPromptPerf });
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
            <Text className="text-center font-bold text-[#ffffff]">SUBMIT</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};
