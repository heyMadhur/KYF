import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '../../context/GlobalProvider'
import { Table, Row, Rows } from 'react-native-table-component';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { Card, Title, Paragraph } from 'react-native-paper';
import { icons, images as img } from '../../constants';
import ScoreBar from '../../components/ScoreBar';
import NutrientsTable from '../../components/NutrientsTable';


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
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="flex-1 items-center bg-primary relative">
          <View className="flex-1 items-center justify-center max-h-[80vh] mt-[-29vh] ml-[-130vw]">
            <Image className="absolute" source={img.rectangle} />
            <Image className="w-[121px] h-[144px] mt-[27vh] ml-[60vw]" source={img.logo} />
          </View>
          <Text className="font-fbold text-2xl font-fsemibold bg-black text-white rounded-full w-[160px] text-center" style={{
            textShadowColor: 'yellow',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 5,
          }}>SCORE: {finalScore / 10}</Text>
          <ScoreBar score={finalScore / 10} />
          <Text className="text-3xl font-bold mt-2" style={{
            textShadowColor: '#b59e92',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 5,
          }}>Know Your Food App</Text>
        </View>
        <Card className='w-full '>
          <Card.Content className="flex-row justify-center items-center">
            <Image source={{ uri: images.front.display.en }} style={{ width: 100, height: 100 }} />
            <View className="border ml-1 flex-1">
              <Title>Product Details</Title>
              <Paragraph>Brand: {brand}</Paragraph>
              <Paragraph>Category: {category}</Paragraph>

            </View>
          </Card.Content>
        </Card>
        <Card className='w-full '>
          <Card.Content className="flex justify-center items-center">
            <Title>Detailed Analysis</Title>
            <View className="border">
              <Title>Nutrition Analysis</Title>
              <Image source={{ uri: images.nutrition.display.en }} style={{ width: 100, height: 100 }} />
              {(Object.keys(sufficientNutrients).length !== 0) && <Text>Nutrition In Sufficent Quantity: {sufficientNutrients}</Text>}
              {(Object.keys(excessiveNutrients).length !== 0) && <Text>Nutrition In Excessive Quantity: {excessiveNutrients}</Text>}
              {(Object.keys(insufficientNutrients).length !== 0) && <Text>Nutrition In InSufficient Quantity: {insufficientNutrients}</Text>}
              <Text>Explanation: {explanation}</Text>
              <NutrientsTable productNutrients={nutrients} />
            </View>
          </Card.Content>
        </Card>
        <Card className='w-full '>
          <Card.Content className="flex justify-center items-center">
            <View>
              <Text>Ingredients</Text>
              <Image source={{ uri: images.ingredients.display.en }} style={{ width: 100, height: 100 }} />
            </View>
            <Text>Eco Grade: {ecograde}</Text>
            <Text>Product Popularity: {popularity}</Text>
          </Card.Content>
        </Card>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Success