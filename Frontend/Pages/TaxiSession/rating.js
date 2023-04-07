import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import { Rating } from 'react-native-ratings';
import React, { useState } from 'react';

export default rating = () => {

  const [currRating, setCurrRating] = useState('0')

  submitRating = (rating) => {
    //TODO: sendrating to backend or smth idk
    Alert.alert(rating) //placeholder method
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32, bottom: '8%'}}>Rate your ride!</Text>
      <Rating
        showRating
        imageSize={50}
        startingValue={0}
        onFinishRating={rating => setCurrRating(String(rating))}
        style={styles.rating}
      />
      <Text style={{top: '2%',fontSize: 16}}>Slide to rate</Text>
      <TouchableOpacity style={styles.button} onPress={() => submitRating(currRating)}>
        <Text style={{fontSize: 32, color: "white",}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rating: {
    justifyContent:'center',
  },

  button: {
    height: 64,
    width: 152,
    borderRadius: 15,
    color: "white",
    backgroundColor: "#4592fe",
    alignItems: 'center',
    justifyContent: 'center',
    top: '15%',
  },

  
});
