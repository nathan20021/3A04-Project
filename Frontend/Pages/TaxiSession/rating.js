import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import { Rating } from "react-native-ratings";
import React, { useState } from "react";

export default rating = ({ navigation }) => {
  const [currRating, setCurrRating] = useState("0");

  submitRating = (rating) => {
    //TODO: sendrating to backend or smth idk
    Alert.alert(rating); //placeholder method
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl mb-8">Rate your ride!</Text>
      <Rating
        showRating
        imageSize={50}
        startingValue={0}
        onFinishRating={(rating) => setCurrRating(String(rating))}
      />
      <Text className="text-lg">Slide to rate</Text>
      <Pressable
        className="h-16 w-28 bg-primary rounded-2xl items-center justify-center top-20"
        onPress={() => {
          navigation.navigate("Location Selection");
        }}
      >
        <Text className="text-white text-2xl">Submit</Text>
      </Pressable>
    </View>
  );
};
