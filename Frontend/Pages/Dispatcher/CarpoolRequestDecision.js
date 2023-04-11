import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { LOCAL_HOST_IP } from "@env";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

export default CarpoolRequestDecision = ({ navigation }) => {
  const route = useRoute();
  const { carpoolID } = route.params;
  const [requests, setRequests] = useState([]);

  const userData = ["hello", "one", "two"];

  getOffers = () => {
    axios
      .get(`http://${LOCAL_HOST_IP}:3000/carpools/getOffers`, {
        params: {
          carpool_id: carpoolID,
        },
      })
      .then((res) => {
        setRequests(res.data.offers);
        // navigation.navigate("Location Selection");
      })
      .catch(() => {
        // navigation.navigate("Login Error");
        console.log("LOLOO");
      });
  };

  const acceptOffer = () => {
    console.log(requests);
    axios
      .post(`http://${LOCAL_HOST_IP}:3000/carpools/respondToOffer`, {
        carpool_id: requests.carpool_id,
        offer_id: requests.indexOf,
        decision: "accept",
      })
      .then((res) => {
        navigation.navigate("Prompt Activate");
      })
      .catch(() => {
        // navigation.navigate("Login Error");
      });
  };

  return (
    <View className="flex-1 justify-center m-4 ">
      <Text className="text-3xl text-center bottom-4">
        You have {requests.length} requests!
      </Text>
      {requests.length > 0 ? (
        <View className="gap-8 flex-row justify-center top-4">
          <Pressable
            className="bg-primary items-center justify-center rounded-xl w-32 h-16"
            onPress={() => acceptOffer()}
          >
            <Text className="text-3xl text-white">Accept</Text>
          </Pressable>
          <Pressable className="bg-primary items-center justify-center rounded-xl w-32">
            <Text className="text-3xl text-white">Decline</Text>
          </Pressable>
        </View>
      ) : null}
      <View className="flex items-center justify-center mt-10">
        <Pressable
          className="bg-primary items-center justify-center rounded-xl py-3 px-4"
          onPress={() => getOffers()}
        >
          <Text className="text-3xl text-white">Refresh</Text>
        </Pressable>
      </View>
    </View>
  );
};
