import React from "react";
import { View, Text, Pressable } from "react-native";
import { useRoute } from "@react-navigation/native";
import { LOCAL_HOST_IP } from "@env";
import axios from "axios";

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

const requestRide = (taxis, navigation) => {
  axios
    .post(`http://${LOCAL_HOST_IP}:3000/carpools/requestCarpool`, {
      carpool_id: taxis.id,
      status: "requested",
    })
    .then((res) => {
      navigation.navigate("Offer Success");
    })
    .catch((err) => {
      navigation.navigate("Offer Declined");
      console.log(err);
    });
};

// {"carpools": [{"currRiders": 1, "currentDistance": null, "destinationDistance": null, "destinationLatitude": 100.515, "destinationLongitude": -12.127, "fare": null, "id": 2, "maxRiders": 5, "status": "open", "taxi_id": 12, "user_id": 1}], "message": "success"}

export default TaxiSelection = ({ navigation }) => {
  const route = useRoute();
  const { taxis, origin, destination } = route.params;
  return (
    <View className="flex flex-col h-full justify-center items-center">
      {taxis.carpools.map((cab, index) => {
        return (
          <View
            key={index}
            className="w-4/5 bg-gray-300 px-3 py-2 rounded-md my-3"
          >
            <View>
              <View className="flex flex-row justify-between">
                <Text className="text-lg font-bold">Taxi {index}</Text>
                <Text className="text-base font-bold">
                  {calculatePrice(
                    origin,
                    destination,
                    cab.destinationLatitude,
                    cab.destinationLongitude
                  )}
                  $
                </Text>
              </View>
              <View className="flex flex-row gap-3 justify-between">
                <Text>{cab.currRiders} riders</Text>
                <Text>
                  {" "}
                  {calculatePrice(
                    origin,
                    destination,
                    cab.destinationLatitude,
                    cab.destinationLongitude
                  ) * 2}
                  km away
                </Text>
              </View>
            </View>
            <View>
              <Pressable
                className="h-8 w-28 rounded-lg bg-primary items-center justify-center"
                onPress={() => {
                  axios
                    .post(
                      `http://${LOCAL_HOST_IP}:3000/carpools/requestCarpool`,
                      {
                        carpool_id: cab.id,
                        status: "requested",
                      }
                    )
                    .then((res) => {
                      console.log("YAYYY");
                      navigation.navigate("Request Wait");
                    })
                    .catch((err) => {
                      navigation.navigate("Offer Declined");
                      console.log(err);
                    });
                }}
              >
                <Text className="text-white">Request Ride</Text>
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
};
