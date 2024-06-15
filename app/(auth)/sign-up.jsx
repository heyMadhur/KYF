import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants'
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField'

const SignUp = () => {
  return (
    <View className="flex-1 items-center bg-primary relative">
      <View className="flex-1 items-center justify-center max-h-[80vh] mt-[-30vh] ">
        <Image className="absolute" source={images.rectangle} />
        <Image className="w-[286px] h-[281px] mt-[20vh]" source={images.logo} />
      </View>
      <Text className="text-2xl font-bold">SignUp</Text>
      <Text className="text-3xl font-bold mt-2" style={styles.textShadow}>Create your account</Text>
      <FormField otherStyles={''} title="Username" placeholder="Username" />
      <FormField title="Email" placeholder="Email" />
      <FormField title="Password" placeholder="Password" />

      <CustomButton title="Signup" handlePress={''} containerStyles="w-[200px]" textStyles="text-red" />

      <View className="justify-center pt-5 flex-row gap-2">
        <Text className="text-lg text-gray-100 font-fregular">Have an account already?</Text>
        <Link href="/sign-in" className='text-lg font-fsemibold text-secondary' >Sign In</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: 'yellow',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  containerShadow: {
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
})

export default SignUp