import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants'
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
      })

      const {setUser, setIsLoggedIn}= useGlobalContext();

      const submit = async() => {
        if(!form.email || !form.password) {
          Alert.alert('Error', "Please fill in all the fields")
        }
        setIsSubmitting(true)
        try{
          await signIn(form.email, form.password)
          const result= await getCurrentUser()
    
          // Set it to Global state using Context
          setUser(result)
          setIsLoggedIn(true)
    
          // Navigate to Home Page
          router.replace('/home')
    
        } catch(error) {
          Alert.alert('Error', error.message)
        } finally {
          setIsSubmitting(false)
        }
    
      }

      const [isSubmitting, setIsSubmitting]= useState(false)

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
            <FormField placeholder="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" />
            <FormField placeholder="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7" />

            <CustomButton title="Login" handlePress={submit} containerStyles="w-[200px]" textStyles="text-red" />

            <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-fregular">Don't have an account, Fr?</Text>
                <Link href="/sign-up" className='text-lg font-fsemibold text-secondary' >Sign Up</Link>
            </View>
        </View>
    )
}

export default SignIn