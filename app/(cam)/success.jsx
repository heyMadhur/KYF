import { View, Text, FlatList, ScrollView, Image, useWindowDimensions, TouchableOpacity, Modal, StyleSheet } from 'react-native'
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
import { useState } from 'react';

const Success = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
    { name: 'Sufficient Nutrients', population: sufficientNutrients.length, color: 'rgba(0, 255, 10, 0.6)', legendFontColor: 'black', legendFontSize: 15 },
    { name: 'Insufficent Nutrients', population: insufficientNutrients.length, color: 'rgba(255, 0, 0, 0.6)', legendFontColor: 'black', legendFontSize: 15 },
    { name: 'Excessive Nutrients', population: insufficientNutrients.length, color: 'rgba(158, 0, 255, 0.6)', legendFontColor: 'black', legendFontSize: 15 },
  ]
  const { width: screenWidth } = useWindowDimensions()

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
          <TouchableOpacity onPress={openModal}>
            <PieChart
              data={data}
              width={screenWidth * 0.9}
              height={220}
              chartConfig={{ color: (opacity) => `rgba(255,255,255, ${opacity})` }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <TouchableOpacity style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="flex-1 justify-center items-center" onPress={closeModal}>
              <View className="ml-5 mr-5 bg-white rounded-[10px] p-5">
                {/* Sufficient Nutrients */}
                <View className="flex-row justify-center items-center">
                  <Text className="text-lg font-semibold">Sufficient Nutrients: </Text>
                  {sufficientNutrients.length==0? <Text>None</Text> :<Text>{sufficientNutrients.join(', ')}</Text>}
                </View>
                {/* InSufficient Nutrients */}
                <View className="flex-row items-center mt-4">
                  <Text className="text-lg font-semibold">Insufficient Nutrients: </Text>
                  {insufficientNutrients.length==0? <Text>None</Text> :<Text>{insufficientNutrients.join(', ')}</Text>}
                </View>
                {/* Excessive Nutrients */}
                <View className="flex-row items-center mt-4 ">
                  <Text className="text-lg font-semibold">Excessive Nutrients: </Text>
                  {excessiveNutrients.length==0? <Text>None</Text> :<Text>{excessiveNutrients.join(', ')}</Text>}
                </View>

              </View>
            </TouchableOpacity>
          </Modal>

        </View>



      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    width: "90vw",
    height: "50vh",
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Success