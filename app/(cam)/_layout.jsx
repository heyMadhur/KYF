import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const CamLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="barcode-scanner"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="success"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="error"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <Text className="bg-primary text-center text-white font-pmedium text-lg">STAY HEALTHY.  LIFE LONG</Text>
      {/* <StatusBar backgroundColor='"#161622' style='light' /> */}
    </>
  )
}

export default CamLayout