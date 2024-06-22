import { View, Text, FlatList, ScrollView, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '../../context/GlobalProvider'
import { Table, Row, Rows } from 'react-native-table-component';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Card, Title, Paragraph } from 'react-native-paper';
import { icons, images as img } from '../../constants';
import ScoreBar from '../../components/ScoreBar';
import NutrientsTable from '../../components/NutrientsTable';
import CustomButton from '../../components/CustomButton';
import ScoreBar2 from '../../components/ScoreBar2';
import { LinearGradient } from 'expo-linear-gradient';

const Success = () => {
  // GLOBAL CONTEXT
  const { productDetails } = useGlobalContext();
  // Access values from the productDetails object
  const finalScore = productDetails.final_score;
  const explanation = productDetails.Explanation;
  const sufficientNutrients = productDetails["Nutrients with Sufficient Quantity"];
  const insufficientNutrients = productDetails["Nutrients less than Sufficient Quantity"];
  const excessiveNutrients = productDetails["Nutrients with Excessive Quantity"];
  const nutrientLevel = productDetails.product_nutrient_level;
  const brand = productDetails.product_brand;
  const category = productDetails.product_category;
  const code = productDetails.product_code;
  const ecograde = productDetails.product_ecograde;
  const nutrients = productDetails.product_nutrients;
  const images = productDetails.product_images;
  const popularity = productDetails.product_popularity;

  const data = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  ]
  const {width: screenWidth}= useWindowDimensions()


  if (!productDetails) {
    return (
      <View className="flex-1 justify-center items-center p-20 bg-primary">
        <Text className="mb-20 text-2xl">Error</Text>
        <Text>Failed to load product details or score.</Text>
      </View>
    );
  }
  return (
    <SafeAreaView className="bg-primary h-full w-full">
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <View className="flex-1  bg-primary relative">
          <View className="flex-1 items-center justify-center max-h-[80vh] mt-[-30vh] ">
            <Image className="absolute" source={img.rectangle} />
            <Image className="w-[286px] h-[281px] mt-[25vh]" source={img.logo} />
          </View>
          <CustomButton title={"RESULTS"} textStyles={"text-white text-2xl"} containerStyles={"w-[200px] bg-red-100 rounded-xl min-h-[40px] mt-20 mb-10"} />

          {/* Score Panel */}
          <View className="flex-row" >
            {/* Score */}
            <View className="mr-2">
              <Text className="text-white text-4xl">SCORE</Text>
              <Text className="text-white text-2xl font-bold text-center">{Math.round(((finalScore / 1000) * 94) * 10) / 10}</Text>
            </View>
            {/* Score Bar */}
            <View className="flex-1">
              <ScoreBar2 finalScore={finalScore} />
            </View>

          </View>
        </View>

        <View className="flex-row flex-wrap mt-8">
          <Text className="text-white text-2xl">REASON: </Text>
          <Text className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>{explanation}</Text>
        </View>

        {/* Pie Chart */}
        <View className="flex flex-wrap mt-8">
          <Text className="text-white text-2xl">Nutritional Insight </Text>
          {/* <PieChart /> */}
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={{color: (opacity) => `rgba(255,255,255, ${opacity})`}}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>



      </ScrollView>

    </SafeAreaView>
  )
}

export default Success