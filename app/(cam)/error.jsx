import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

const Error = () => {
  return (
    <View className="flex-1 items-center bg-primary relative">
      <View className="flex-1 items-center justify-center max-h-[80vh] mt-[-30vh] ">
        <Image className="absolute" source={images.rectangle} />
        <Image className="w-[286px] h-[281px] mt-[20vh]" source={images.logo} />
      </View>
      <Text className="text-2xl font-bold">Oopsiee!!</Text>
      <Text className="text-3xl font-bold mt-2" style={{
        textShadowColor: '#b59e92',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
      }}>Some Error Occured while Scanning !!</Text>
      <CustomButton title="Scan Again !!" handlePress={() => { router.push('barcode-scanner') }} containerStyles="w-[250px] p-4" textStyles="text-red" />
      <Text>Reasons for Error-:</Text>
      <Text>1. Product is not Listed in database</Text>
      <Text>2. Error while fetching detail. Try Again!</Text>
    </View>
  )
}

export default Error