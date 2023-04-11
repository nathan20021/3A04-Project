import {Text, View, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';

export default CarpoolOfferSuccessPage = ({ navigation: { goBack } }) => {
  const [offererData, setOffererData] = useState([''])

  getOffererInfo = () => {
    //TODO: user info, backend integration 
    return ["John"] //whatever else is in here, only really need name
  }

  useEffect(()=>{
    setOffererData(getOffererInfo())
  }, [])

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl">{offererData[0]} accepted your Request!</Text>
      <Text/>
      <Text className="text-xl">Happy Riding!</Text>
      <Text/>
      <Pressable 
        className='h-16 w-28 rounded-lg bg-primarySuccess items-center justify-center'
        onPress={() =>  navigation.navigate('Fare Display')}>
        <Text className="text-center font-bold text-white text-lg">Continue</Text>
      </Pressable>
    </View>
  )
}
