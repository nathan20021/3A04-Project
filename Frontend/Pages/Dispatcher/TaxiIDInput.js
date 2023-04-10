import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";

export default TaxiIDInputPage = () => {
  const [scanned, setScanned] = useState(false);
  const [taxiID, setTaxiID] = useState("");
  const cameRef = useRef(null);

  const onSuccess = (e) => {
    setTaxiID(e.data.split(":")[1]);
    setScanned(true);
  };

  const onFailed = (e) => {
    setTaxiID("");
    setScanned(true);
  };

  return (
    <View style={styles.container}>
      {scanned ? (
        <>
          <View>
            <Text style={styles.text}>
              {taxiID === "" ? "SCAN FAILED" : `TAXI ID: ${taxiID}`}
            </Text>
          </View>
          <View className="flex flex-row">
            <TouchableOpacity
              className="mr-2 border-2 border-primary rounded-md p-2"
              onPress={() => setScanned(false)}
            >
              <Text className="text-base">Scan again</Text>
            </TouchableOpacity>
            {taxiID !== "" && (
              <TouchableOpacity
                className="mr-2 bg-primary rounded-md py-2 px-4"
                onPress={() => setScanned(false)}
              >
                <Text className="text-base text-white font-bold">
                  Offer Taxi
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <QRCodeScanner
          reactivateTimeout={10000}
          ref={cameRef}
          onRead={(e) => {
            e.data.split(":")[0] === "TAXIID" ? onSuccess(e) : onFailed(e);
          }}
          cameraStyle={styles.camera}
          topContent={
            <Text style={styles.centerText}>
              Please scan the QR code to proceed.
            </Text>
          }
          bottomContent={
            <TouchableOpacity
              onPress={() => {
                setScanned(false), cameRef.current.reactivate();
              }}
            >
              <Text style={styles.buttonText}>Scan again</Text>
            </TouchableOpacity>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    height: "100%",
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: "#777",
    textAlign: "center",
  },
  buttonText: {
    fontSize: 21,
    color: "rgb(0,122,255)",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
