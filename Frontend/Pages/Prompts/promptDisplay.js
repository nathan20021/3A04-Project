import { Text, View, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { LOCAL_HOST_IP } from "@env";
import axios from "axios";

export default PromptDisplay = () => {
  const [prompt, setPrompt] = useState("");

  generatePrompt = () => {
    axios
      .get(`http://${LOCAL_HOST_IP}:3000/prompts`)
      .then((res) => {
        setPrompt(res.data.prompt);
        // navigation.navigate("Location Selection");
      })
      .catch(() => {
        // navigation.navigate("Login Error");
        console.log("LOLOO");
      });
  };

  useEffect(() => {
    generatePrompt();
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-center mx-8 mb-16">{prompt}</Text>
      <Pressable
        className="h-16 w-48 bg-primary items-center justify-center rounded-lg"
        onPress={() => setPrompt(generatePrompt())}
      >
        <Text className="text-3xl text-white">Generate</Text>
      </Pressable>
    </View>
  );
};
