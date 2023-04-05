import React from "react";
import { View, Text, Pressable } from "react-native";

export default PromptPerfCard = ({ text, boolean, onPress }) => {
  const commonStyle = `flex flex-col justify-center items-center rounded-md w-32 h-10 mx-2 my-1`;
  return (
    <Pressable
      className={
        boolean ? `${commonStyle} bg-[#6283a7]` : `${commonStyle} bg-[#e8e8e8]`
      }
      onPress={onPress}
    >
      <Text
        className={boolean ? `wfont-bold text-[#fff]` : `font-bold text-[#000]`}
      >
        {text}
      </Text>
    </Pressable>
  );
};
