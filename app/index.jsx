import { Image, Text, View } from "react-native";
import {images} from '../constants'
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-primary border-2 border-red relative">
      <View className="h-full flex-1 items-center justify-center max-h-[80vh] ">
        <Image className="absolute" source={images.rectangle} />
        <Image className="" source={images.logo} />
      </View>
      <CustomButton title="START" containerStyles="w-[200px]" textStyles="text-red" />
    </View>
  );
}
