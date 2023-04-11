import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

export default CarpoolRequestDecision = ({ navigation }) => {
  // const [userData, setUserData] = useState(["", "", "", "", []]);
  const [userData, setUserData] = useState([
    "Mr Man",
    "Hogwarts",
    "Saturn",
    "100",
    ["food", "school", "living", "loving", "learning"],
  ]);

  // const getUserInfo = () => {
  //   //TODO: user info, backend integration
  //   return [
  //     "Mr Man",
  //     "Hogwarts",
  //     "Saturn",
  //     "100",
  //     ["food", "school", "living", "loving", "learning"],
  //   ];
  // };

  const accepted = () => {
    //TODO: offer posting updates, rider's ride also updates
    // goBack();
  };

  const declined = () => {
    //TODO: show rider declined on details page, nagivate back
    // goBack();
  };

  return (
    <View className="flex-1 justify-center m-4 ">
      <Text className="text-3xl text-center bottom-4">
        {userData[0]} wants to ride with you!
      </Text>
      <View className="flex-row">
        <View className="items-start">
          <Text className="text-xl items-center ml-4 mt-4">
            From: {userData[1]}
          </Text>
          <Text className="text-xl items-center ml-4 mt-4">
            To: {userData[2]}
          </Text>
        </View>
      </View>

      <View className="gap-8 flex-row justify-center top-4">
        <Pressable
          className="bg-primary items-center justify-center rounded-xl w-32 h-16"
          onPress={accepted}
        >
          <Text className="text-3xl text-white">Accept</Text>
        </Pressable>
        <Pressable
          className="bg-primary items-center justify-center rounded-xl w-32"
          onPress={declined}
        >
          <Text className="text-3xl text-white">Decline</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  responseWrapper: {
    gap: -16,
    alignItems: "bottom",
    justifyContent: "flex-end",
    maxWidth: 240,
  },
});
