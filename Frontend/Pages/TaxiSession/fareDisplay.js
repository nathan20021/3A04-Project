import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

export default fareDisplay = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.pathWrapper}>
        <View style={styles.locations}>
          <Text style={{fontSize: 32, textAlign: 'center', width: 200}}>{getOrigin()}</Text>
          <Text style={{fontSize: 32, textAlign: 'center', width: 200}}>{getDest()}</Text>
        </View>
        
        <View style={styles.points}>
            <View style={styles.origin}/>
            <View style={styles.arrow}>
              <View style={styles.rectangle}/>
              <View style={styles.triangle}/>
            </View>
            <View style={styles.destination}/>  
        </View>
      </View>
      
      <View style = {styles.wrapper}>
        <Text style={{fontSize: 32, textAlign: 'center', bottom: ' 40%'}}>Arrived at destination</Text>

        <Text style={styles.fareText}>Total Fare:</Text>
        <Text style={styles.farePrice}>${getFare()}</Text>

        <StatusBar style="auto" />
      </View>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Replace the onPress function with navigation")}>
          <Text style={{fontSize: 32, color: "white",}}>Done</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  wrapper:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  pathWrapper: {
    position: 'relative',
    justifyContent: 'center',
    top: '3%',
  },

  locations: {
    flexDirection: 'row',
    alignItems: 'center',
    top:'-5%'
  },

  points: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 24
  },

  origin: {
    margin: 10,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "pink",
  },

  destination: {
    margin: 10,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "lavender",
  },

  fareText: {
    fontSize: 30,
    bottom: '10%'
  },

  farePrice: {
    fontSize: 30,
  },

  button: {
    height: 64,
    width: 152,
    borderRadius: 15,
    color: "white",
    backgroundColor: "#4592fe",
    alignItems: 'center',
    justifyContent: 'center',
  },

  rectangle: {
    width: 96,
    height: 8,
    backgroundColor: "black",
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "black",
    transform: [{ rotate: "90deg" }]
  },

  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
