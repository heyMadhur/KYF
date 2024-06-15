import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons} from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-fmedium"></Text>

            <View className=" w-[80vw] h-14 px-4 bg-white rounded-full focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 font-fsemibold text-base w-full "
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#ac91c6"
                    onChangeText={handleChangeText}
                    secureTextEntry={(title === "Password" && !showPassword)} />
                    {title==='Password' && (
                        <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                            <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode='contain' />

                        </TouchableOpacity>
                    )}
                    {title==='Username' && (
                            <Image source={icons.human} className="w-6 h-6" resizeMode='contain' />
                    )}
            </View>
        </View>
    )
}
export default FormField