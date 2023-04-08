import React from 'react'
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default FareDisplay = ({navigation}) => {
  getOrigin = () => {
    //TODO: Get starting location
    return "McMaster University"
  }

  getDest = () => {
    // TODO: Get destination location
    return "Union Station"
  }

  getFare = () => {
    //TODO: return calculated fare rate
    return 32.66
  }

  const register = () => {
    //TODO: its broken
    navigation.navigate("Rating");
  };

  return (
    <View className = "flex-1 items-center justify-between mb-16">
      <View className = "justify-center top-16">
        <View className = "items-center flex-row">
          <Text className = "text-2xl text-center w-40 mr-8 mb-4">{getOrigin()}</Text>
          <Text className = "text-2xl text-center w-40 mb-4">{getDest()}</Text>
        </View>
        
        <View className = "justify-center items-center flex-row gap-8">
            <View className = "bg-pink-200 w-8 h-8 rounded-3xl"/> 
            <View className = "flex-row items-center">
              <View className = " w-24 h-2 bg-black"/>
              <View style = {styles.triangle}/>
            </View>
            <View className = "bg-violet-200 w-8 h-8 rounded-3xl"/>  
        </View>
      </View>
      
      <View className = "justify-center items-center">
        <Text className = "text-3xl items-center pb-8 pt-8">Arrived at destination</Text>

        <Text className = "text-3xl mt-4 mb-4">Total Fare:</Text>
        <Text className = "text-3xl">${getFare()}</Text>
      </View>

        <Pressable className = "h-16 w-28 rounded-lg bg-primary items-center justify-center" onPress={register}>
          <Text style={{fontSize: 32, color: "white",}}>Done</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  triangle: {
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    transform: [{ rotate: "90deg" }]
  },
});
