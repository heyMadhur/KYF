import React from 'react';
import { Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const NutrientsTable = ({ productNutrients }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        Nutrients Table
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nutrient</DataTable.Title>
          <DataTable.Title numeric>Value</DataTable.Title>
          <DataTable.Title numeric>Unit</DataTable.Title>
        </DataTable.Header>

        {Object.keys(productNutrients).map((key) => (
          <DataTable.Row key={key}>
            <DataTable.Cell>{key.replace(/_/g, ' ')}</DataTable.Cell>
            <DataTable.Cell numeric>{productNutrients[key]}</DataTable.Cell>
            <DataTable.Cell numeric>{productNutrients[`${key}_unit`]}</DataTable.Cell>
          </DataTable.Row>
        ))}

      </DataTable>
    </View>
  );
};

export default NutrientsTable;
