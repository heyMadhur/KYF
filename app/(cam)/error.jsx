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
      <Text className="text-3xl font-bold mt-2" style={{
        textShadowColor: '#b59e92',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
      }}>Some Error Occured while Scanning !!</Text>
      <Text className="text-2xl text-left w-full ml-10 ">Will Update you soon</Text>
      <Text className="text-2xl text-white font-bold text-left w-full ml-10 mt-7 ">PRO TIP:</Text>

      <View className="p-2 rounded-xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
       <Text>1. Base your meals on higher fibre starchy carbohydrates.</Text> 
       <Text>2. Eat lots of fruit and veg.</Text> 
       <Text>3. Eat more fish, including a portion of oily fish.</Text> 
      </View>

      <CustomButton title="Scan Again !!" handlePress={() => { router.push('barcode-scanner') }} containerStyles="w-[250px] p-4" textStyles="text-red" />
    </View>
  )
}

export default Error