import { Text, View, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';


export default PromptDisplay = () => {
  const [prompt, setPrompt] = useState("")

  generatePrompt = () => {
    //TODO: Backend call to generate prompt
    return "Which course do you hate the most, and why is it 3PX3?"
  }

  useEffect(() => {
    setPrompt(generatePrompt())
  })

  return (
    <View className = "flex-1 items-center justify-center">
      <Text className = "text-3xl text-center mx-8 mb-16">{prompt}</Text>
      <Pressable className = "h-16 w-48 bg-primary items-center justify-center rounded-lg" 
                  onPress={() => setPrompt(generatePrompt())}>
        <Text className = "text-3xl text-white">Generate</Text>
      </Pressable>
    </View>
  );
}
