import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY, LOCAL_HOST_IP } from "@env";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 43.260879,
  longitude: -79.9192254,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

function InputAutocomplete({ label, placeholder, onPlaceSelected }) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </>
  );
}

export default LocationSelectionPage = ({ navigation }) => {
  const [originFormatedAddy, setOriginFormatedAddy] = useState("");
  const [destinationFormatedAddy, setDestinationFormatedAddy] = useState("");
  const [showLocationSelection, setShowLocationSelection] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef(null);

  const moveTo = (position) => {
    if (!mapRef.current) return;
    mapRef.current.setCamera(
      {
        center: position,
        altitude: 0,
        zoom: 15,
        pitch: 0,
        heading: 0,
      },
      { duration: 1000 }
    );
  };

  const edgePaddingValue = 70;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args) => {
    if (args) {w
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
    } else {
      setShowDirections(false);
      setDistance(0);
      setDuration(0);
    }
  };

  const findCarpool = () => {
    traceRoute();
    axios
      .get(`http://${LOCAL_HOST_IP}:3000/carpools/getCarpools`, {
        destinationLatitude: destination.latitude,
        destinationLongitude: destination.longitude,
        locationLatitude: origin.latitude,
        locationLongitude: origin.longitude,
      })
      .then((response) => {
        navigation.navigate("Taxi Selection", {
          taxis: response.data,
          origin: origin,
          destination: destination,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const offerCarpool = () => {
    navigation.navigate("Carpool Offer", {
      origin: origin,
      destination: destination,
    });
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    };
    set(position);
    moveTo(position);
    traceRoute();
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
      >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeColor="#6644ff"
            strokeWidth={4}
            onReady={traceRouteOnReady}
          />
        )}
      </MapView>

      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setShowLocationSelection(!showLocationSelection);
          }}
        >
          <Text style={styles.buttonText}>
            {!showLocationSelection ? "v" : "^"}
          </Text>
        </TouchableOpacity>
        {showLocationSelection && (
          <View>
            <InputAutocomplete
              placeholder={originFormatedAddy}
              label="Origin"
              onPlaceSelected={(details) => {
                setOriginFormatedAddy(details.formatted_address);
                onPlaceSelected(details, "origin");
              }}
            />
            <InputAutocomplete
              placeholder={destinationFormatedAddy}
              label="Destination"
              onPlaceSelected={(details) => {
                setDestinationFormatedAddy(details.formatted_address);
                onPlaceSelected(details, "destination");
              }}
            />
            <View className="flex flex-row w-full justify-around">
              <View className="w-1/2">
                <View className="flex flex-col gap-3 mt-3">
                  <Text>
                    Distance:{" "}
                    {distance && duration ? distance.toFixed(2) : "---"} km
                  </Text>
                  <Text>
                    Duration:{" "}
                    {distance && duration ? Math.ceil(duration) : "---"} min
                  </Text>
                </View>
              </View>
              <View className="w-1/2">
                <TouchableOpacity
                  style={styles.traceButton}
                  onPress={traceRoute}
                >
                  <Text className="text-center text-white">Trace Route</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.requestButton}
                  onPress={findCarpool}
                >
                  <Text className="text-center text-white">Find Carpool</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.requestButton}
                  onPress={offerCarpool}
                >
                  <Text className="text-center text-white">Offer Carpool</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 0,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#bbb",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },

  requestButton: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#4592fe",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },

  traceButton: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#aa3333",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
  },
});
