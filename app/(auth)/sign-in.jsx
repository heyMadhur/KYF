import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants'
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField'

const SignIn = () => {
    return (
        <View className="flex-1 items-center bg-primary relative">
            <View className="flex-1 items-center justify-center max-h-[80vh] mt-[-30vh] ">
                <Image className="absolute" source={images.rectangle} />
                <Image className="w-[286px] h-[281px] mt-[20vh]" source={images.logo} />
            </View>
            <Text className="text-2xl font-bold">Login</Text>
            <Text className="text-3xl font-bold mt-2" style={{
                textShadowColor: '#b59e92',
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 5,
            }}>Sign in to your account</Text>
            <FormField title="Username" placeholder="Username" />
            <FormField title="Password" placeholder="Password" />

            <CustomButton title="Login" handlePress={()=>{router.push('barcode-scanner')}} containerStyles="w-[200px]" textStyles="text-red" />

            <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-fregular">Don't have an account, Fr?</Text>
                <Link href="/sign-up" className='text-lg font-fsemibold text-secondary' >Sign Up</Link>
            </View>
        </View>
    )
}

export default SignIn