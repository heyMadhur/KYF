import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants'
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const { setUser, setIsLoggedIn } = useGlobalContext();

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', "Please fill in all the fields")
    }
    setIsSubmitting(true)
    try {
      const result = await createUser(form.email, form.password, form.username)

      // Set it to Global state using Context
      setUser(result)
      setIsLoggedIn(true)

      // Navigate to Home Page
      router.replace('/home')

    } catch (error) {
      Alert.alert("Update", "Reached")
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }

  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <View className="flex-1 items-center bg-primary relative">
      <View className="flex-1 items-center justify-center max-h-[80vh] mt-[-30vh] ">
        <Image className="absolute" source={images.rectangle} />
        <Image className="w-[286px] h-[281px] mt-[20vh]" source={images.logo} />
      </View>
      <Text className="text-2xl font-bold">SignUp</Text>
      <Text className="text-3xl font-bold mt-2" style={styles.textShadow}>Create your account</Text>
      <FormField 
      title="Username"
      placeholder="UserName"
        value={form.username}
        handleChangeText={(e) => setForm({ ...form, username: e })}
        otherStyles="mt-10" />
      <FormField placeholder="Email"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e })}
        otherStyles="mt-7"
        keyboardType="email-address" />
      <FormField
        title="Password"
      placeholder="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
        otherStyles="mt-7" />

      <CustomButton title="Signup" handlePress={submit} containerStyles="w-[200px]" textStyles="text-red" isLoading={isSubmitting} />

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