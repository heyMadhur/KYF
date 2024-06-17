import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { CameraView, Camera } from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState("Not yet Scanned");
  const [type, setType] = useState(null)

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  // What happens when we scan the barcode
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setType(type)
    console.log((type))
    console.log(type === 256)
    setBarcode(data);
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Requesting for Camera Permission</Text>
      </SafeAreaView>
    );
  }
  if (hasPermission === false) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Camera Access</Text>
        <Button title={"Allow Camera"} onPress={askForCameraPermission} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 300, width: 300, overflow: 'hidden', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["pdf417","code128","code39",'code93','ean13','ean8','upc_a','upc_e','datamatrix','interleaved2of5','itf14','aztec'],
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <Text>{barcode}</Text>
      {scanned && (
        <Button title={"Scan again?"} onPress={() => setScanned(false)} color="tomato" />
      )}
    </SafeAreaView>
  );
}