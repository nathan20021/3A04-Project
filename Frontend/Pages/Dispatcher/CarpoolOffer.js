import React, { useState } from "react";
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
import { useRoute } from "@react-navigation/native";
import { LOCAL_HOST_IP } from "@env";
import axios from "axios";

export default CarpoolOffer = ({ navigation }) => {
  const route = useRoute();
  const { origin, destination } = route.params;
  const [formState, setFormState] = useState({
    taxiID: 0,
    offernum: "",
    destination: "",
    taxiID: "",
    promptPerf: Array(Object.keys(PromptPerf).length).fill(false),
  });

  const submit = () => {
    console.log(`http://${LOCAL_HOST_IP}:3000/carpools/offerCarpool`);
    axios
      .post(`http://${LOCAL_HOST_IP}:3000/carpools/offerCarpool`, {
        taxiID: formState.taxiID,
        destinationLatitude: destination.latitude,
        destinationLongitude: destination.longitude,
        currRiders: 1,
        maxRiders: formState.offernum,
      })
      .then((res) => {
        navigation.navigate("Offerer Decision", {
          carpoolID: res.data.carpool_id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const qrScan = () => {
    navigation.navigate("Taxi ID Input");
  };

  return (
    <ScrollView>
      <View className="w-full min-h-[100vh] flex items-center justify-center flex-1">
        <View className="w-[80%] h-full">
          <View className="gap-3 py-10 flex justify-center">
            <View id="form-header">
              <Text className="font-bold text-center text-lg mb-2">
                Post a Ride!
              </Text>
            </View>
            <SafeAreaView className="flex flex-col gap-y-5">
              <View>
                <Text className="font-bold mb-1">Taxi ID</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10"
                  onChangeText={(e) => {
                    setFormState({ ...formState, taxiID: e });
                  }}
                  value={formState.taxiID}
                  placeholder=""
                />
                <Text className="text-center m-4">Or</Text>
                <View className="flex-1 items-center">
                  <Pressable
                    className="h-10 w-28 rounded-lg bg-primary  items-center justify-center"
                    onPress={qrScan}
                  >
                    <Text className="text-white font-bold">Scan QR</Text>
                  </Pressable>
                </View>
              </View>
              {/* <View>
                <Text className="font-bold mb-1">Destination</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
                  onChangeText={(e) => {
                    setFormState({ ...formState, destination: e });
                  }}
                  value={formState.destination}
                  placeholder="1280 Main St W, Hamilton, ON L8S 4L8"
                />
              </View> */}
              <View>
                <Text className="font-bold mb-1">Number of Seats</Text>
                <TextInput
                  autoCapitalize="none"
                  className="border-2 border-gray-300 rounded-sm px-3 h-10 w-full"
                  onChangeText={(e) => {
                    setFormState({ ...formState, offernum: e });
                  }}
                  value={formState.offernum}
                />
              </View>

              {/* <View className="relative my-2">
                <View className="absolute border-b-2 border-b-[#c0c0c0] w-full top-[50%]"></View>
                <View className="flex items-center justify-center">
                  <Text className="text-center bg-[#ffffff] px-3 font-bold">
                    What's your prompting preference?
                  </Text>
                </View>
              </View> */}
              {/* <View className="flex flex-row flex-wrap w-full">
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
              </View> */}
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
