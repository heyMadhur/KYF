import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Scorebar2({ finalScore }) {
    const position = Math.round(((finalScore / 1000) * 94)*10)/10;
    console.log(position)
    return (

        <View className="flex-1 justify-center mt-10 relative">

            <LinearGradient
                // Button Linear Gradient
                className="rounded-full"
                start={[0, 1]}
                end={[1, 1]}
                colors={['#FF0000', '#DE9624', '#23FF39']}
            >
                <Text className="w-full h-3"></Text>
            </LinearGradient>
            <View className="w-full flex-row justify-between items-center ">
                <Text>0</Text>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
                <Text>4</Text>
                <Text>5</Text>
                <Text>6</Text>
                <Text>7</Text>
                <Text>8</Text>
                <Text>9</Text>
                <Text>10</Text>
            </View>
            <Text className={`text-4xl`} style={{ marginLeft: `${finalScore}%` }} >^</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Arrange items horizontally
        justifyContent: 'space-between', // Distribute items evenly along the row
        alignItems: 'center', // Center items vertically within the container
        paddingHorizontal: 10, // Optional: Add horizontal padding to the container
        backgroundColor: '#f0f0f0',
        height: 100, // Optional: Set a fixed height for the container
    },
    item: {
        width: '10%', // Each item covers 10% of the container's width
        height: '100%', // Optional: Make items stretch vertically to match container height
        backgroundColor: '#8b70cc',
    },
});
