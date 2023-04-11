import { Text, View, Pressable } from "react-native";
import { LOCAL_HOST_IP } from "@env";
import axios from "axios";
import { React, useState } from "react";

export default CarpoolRequestWait = ({ navigation }) => {
  const [decision, setDecision] = useState(false);

  const refresh = () => {
    setDecision(true);
  };
  return (
    <View>
      {!decision ? (
        <View className="justify-center items-center">
          <Text className="text-2xl">
            Waitng for Offerer to make a decision
          </Text>
          <Text />
          <Text className="text-xl">Please wait</Text>
          <Text />
          <Pressable
            className="h-10 w-28 rounded-lg bg-primary  items-center justify-center"
            onPress={refresh}
          >
            <Text className="text-white font-bold">Refresh</Text>
          </Pressable>
        </View>
      ) : (
        <View className="justify-center items-center">
          <Text className="text-2xl">Your offer was accepted.</Text>
          <Text />
          <Text className="text-xl">Enjoy your ride!</Text>
          <Text />
        </View>
      )}
    </View>
  );
};
