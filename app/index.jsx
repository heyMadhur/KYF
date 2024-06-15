import { Image, Text, View } from "react-native";
import {images} from '../constants'
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary relative">
      <View className="h-full flex-1 items-center justify-center max-h-[80vh] ">
        <Image className="absolute" source={images.rectangle} />
        <Image className="" source={images.logo} />
      </View>
      <CustomButton title="START" handlePress={()=>{router.push('sign-in')}} containerStyles="w-[200px]" textStyles="text-red" />
    </View>
  );
}
