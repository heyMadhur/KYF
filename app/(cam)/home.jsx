import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { icons, images } from '../../constants'
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField'

const Home = () => {
    return (
        <View className="flex-1 items-center bg-primary relative">
            <View className="flex-1 items-center justify-center max-h-[80vh] mt-[-30vh] ">
                <Image className="absolute" source={images.rectangle} />
                <Image className="w-[286px] h-[281px] mt-[20vh]" source={images.logo} />
            </View>
            <Text className="text-2xl font-bold">WelCome UserName</Text>
            <Text className="text-3xl font-bold mt-2" style={{
                textShadowColor: '#b59e92',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 5,
            }}>Know Your Food App</Text>

            <Image className="w-[125px] h-[131px] mt-10" source={icons.barcodescan} />
            <CustomButton title="Lets Scan !!" handlePress={() => { router.push('barcode-scanner') }} containerStyles="w-[250px] p-4" textStyles="text-red" />
        </View>
    )
}

export default Home