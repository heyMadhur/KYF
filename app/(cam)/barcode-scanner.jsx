import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert, ActivityIndicator } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { getProductDetails } from "../../lib/product";
import { router } from "expo-router";
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from '../../context/GlobalProvider'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcode, setBarcode] = useState("Not yet Scanned");
  const [type, setType] = useState(null)
  const [loading, setLoading] = useState(false);  // Loading state

  // GLOBAL CONTEXT
  const { setProductDetails } = useGlobalContext();

  const getDetails = async () => {
    if (type === 256) {
      Alert.alert("Please Scan the Barcode only !!")
      return
    }
    try {
      setLoading(true)
      const details = await getProductDetails(barcode);
      // Set Details and Score to Global State
      setProductDetails(details);
      setLoading(false);    // Set loading to false after API response
      if (details !== null) {
        router.push('success')
      }
      else {
        router.push('error')
      }
    } catch (error) {
      setLoading(false)
      console.error("Error fetching product details or score", error);
      router.push('error')
    }
  }

  useEffect(() => {
    if (barcode !== "Not yet Scanned" && type !== null) {
      getDetails();
    }

  }, [barcode, type])


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
    // console.log(type === 256)
    setBarcode(data);
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView className="bg-primary" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Requesting for Camera Permission</Text>
      </SafeAreaView>
    );
  }
  if (hasPermission === false) {
    return (
      <SafeAreaView className="bg-primary" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Camera Access</Text>
        <CustomButton title={"Allow Camera"} handlePress={askForCameraPermission} containerStyles="w-[250px] p-4" textStyles="text-red" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-primary" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 300, width: 300, overflow: 'hidden', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["pdf417", "code128", "code39", 'code93', 'ean13', 'ean8', 'upc_a', 'upc_e', 'datamatrix', 'interleaved2of5', 'itf14', 'aztec'],
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <Text className="text-base text-gray-100 text-3xl font-bold mt-20">{barcode}</Text>
      {scanned && (
        <CustomButton title={"Scan again?"} handlePress={() => setScanned(false)} containerStyles="w-[250px] p-4" textStyles="text-red" />
      )}
      {loading && (
        <View className="absolute w-full h-full inset-0 bg-black/50 justify-center items-center z-10">
          <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
        </View>
      )}
    </SafeAreaView>
  );
}