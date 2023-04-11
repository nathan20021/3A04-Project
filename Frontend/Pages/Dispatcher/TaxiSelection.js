import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

const distance = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // km (change this constant to get miles)
  var dLat = ((lat2 - lat1) * Math.PI) / 180;
  var dLon = ((lon2 - lon1) * Math.PI) / 180;
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return Math.round(d);
};

const calculatePrice = (origin, des, lon, lat) => {
  const overAlldistance =
    distance(origin.latitude, origin.longitude, des.latitude, des.longitude) +
    distance(lon, lat, des.latitude, des.longitude);
  console.log(overAlldistance);
  const price = 0.5 * overAlldistance;
  return price;
};

const TaxiCard = ({ cab, origin, destination, key, index }) => {
  const price = calculatePrice(
    origin,
    destination,
    cab.destinationLongitude,
    cab.destinationLatitude
  );
  const distance = price * 2;
  return (
    <View key={key} className="w-4/5 bg-gray-300 px-3 py-2 rounded-md">
      <View className="flex flex-row justify-between">
        <Text className="text-lg font-bold">Taxi {index}</Text>
        <Text className="text-base font-bold">{price} $</Text>
      </View>
      <View className="flex flex-row gap-3 justify-between">
        <Text>{cab.currRiders} riders</Text>
        <Text>{distance} km away</Text>
      </View>
    </View>
  );
};
// {"carpools": [{"currRiders": 1, "currentDistance": null, "destinationDistance": null, "destinationLatitude": 100.515, "destinationLongitude": -12.127, "fare": null, "id": 2, "maxRiders": 5, "status": "open", "taxi_id": 12, "user_id": 1}], "message": "success"}

export default TaxiSelection = ({ navigation }) => {
  const route = useRoute();
  const { taxis, origin, destination } = route.params;
  console.log(taxis);
  return (
    <View className="flex flex-row w-full h-full justify-center items-center">
      {taxis.carpools.map((cab, index) => {
        return (
          <TaxiCard
            key={index}
            cab={cab}
            origin={origin}
            index={index}
            destination={destination}
          />
        );
      })}
    </View>
  );
};
