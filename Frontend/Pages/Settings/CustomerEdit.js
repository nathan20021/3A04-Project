import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import { LOCAL_HOST_IP } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default CustomerEditPage = ({ navigation }) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // error reading value
      }
    };
    getData()
      .then((data) => {
        console.log(data);
        setFormState({
          ...formState,
          username: data.username,
          user_id: data.userID,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "01/01/2000",
    user_id: "",
  });

  const submit = () => {
    editUser();
  };

  const editUser = () => {
    // navigation.navigate("Registration Success");
    console.log(`http://${LOCAL_HOST_IP}:3000/users/edit`);
    axios
      .post(`http://${LOCAL_HOST_IP}:3000/users/edit`, {
        username: formState.username,
        password: formState.password,
        email: formState.email,
        user_id: formState.user_id,
      })
      .then((res) => {
        navigation.navigate("Registration Success");
      })
      .catch((err) => {
        navigation.navigate("Registration Error");
      });
  };

  return (
    <ScrollView>
      <View className="w-full min-h-[100vh] flex items-center justify-center flex-1">
        <View className="w-[80%] h-full">
          <View className="gap-3 py-10 flex justify-center">
            <View id="form-header">
              <Text className="font-bold text-center text-lg mb-2">
                Edit your profile!
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
                  placeholder=""
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

              <View className="flex items-center">
                <Pressable
                  onPress={submit}
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
