import { StyleSheet, Text, View, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';

export default CarpoolRequestDecision = ({ navigation: { goBack } }) => {
  const [userData, setUserData] = useState(['', '', '', '', []])

  getUserInfo = () => {
    //TODO: user info, backend integration 
    return ["Mr Man", "Hogwarts", "Saturn", "100", ["food", "school", "living", "loving", 'learning']]
  }

  accepted = () => {
    //TODO: offer posting updates, rider's ride also updates
    goBack()
  }

  declined = () => {
    //TODO: show rider declined on details page, nagivate back 
    goBack()
  }

  useEffect(()=>{
    setUserData(getUserInfo())
  }, [])

  formatString = (interests) => {
    s = interests[0]
    for (var i = 1; i < interests.length; i++){
      s = s.concat(", ", interests[i])
    }
    return s
  }


  return (
      <View className = 'flex-1 justify-center m-4 ' >
        <Text className = 'text-3xl text-center bottom-4'>{userData[0]} wants to ride with you!</Text>
        <View className = 'flex-row'>
          <View className='items-start'>
            <Text className = 'text-xl items-center ml-4 mt-4'>From:</Text>
            <Text className = 'text-xl items-center ml-4 mt-4'>To:</Text>
            <Text className = 'text-xl items-center ml-4 mt-4'>Age:</Text>
            <Text className = 'text-xl items-center ml-4 mt-4'>Interests:</Text>
          </View>
          <View style={styles.responseWrapper}>
            <Text className = 'text-xl items-center m-4'>{userData[1]}</Text>
            <Text className = 'text-xl items-center m-4'>{userData[2]}</Text>
            <Text className = 'text-xl items-center m-4'>{userData[3]}</Text>
            <Text className = 'text-xl items-center text-left m-4'>{formatString(userData[4])}</Text>
          </View>
      </View>
    
      <View className = 'gap-8 flex-row justify-center top-4'>
        <Pressable 
          className = 'bg-primary items-center justify-center rounded-xl w-32 h-16' 
          onPress={accepted}>
          <Text className = 'text-3xl text-white'>Accept</Text>
        </Pressable>
        <Pressable 
          className = 'bg-primary items-center justify-center rounded-xl w-32' 
          onPress={declined}>
          <Text className = 'text-3xl text-white'>Decline</Text>
        </Pressable>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  responseWrapper:{
    gap: -16,
    alignItems: 'bottom',
    justifyContent: 'flex-end',
    maxWidth: 240
  }});