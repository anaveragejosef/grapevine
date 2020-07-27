import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import VarietalButton from './VarietalButton.js';

const WineVarietal = ({ route, navigation }) => {
  let { wineType } = route.params;
  let varietals;
  if (wineType === 'Red') {
    varietals = ['Cabernet Franc', 'Cabernet Sauvignon', 'Grenache', 'Malbec', 'Merlot', 'Mourvèdre', 'Petite Sirah', 'Petite Verdot', 'Pinot Noir', 'Sangiovese', 'Syrah', 'Red Blend', 'Tempranillo', 'Zinfandel'];
  } else if (wineType === 'White') {
    varietals = ['Chardonnay', 'Sauvignon Blanc', 'Pinot Grigio', 'Pinot Gris', 'Riesling', 'Muscat/Moscato', 'White Blend', 'Pinot Blanc'];
  } else {
    varietals = ['Grenache Rosé', 'Sangiovese Rosé', 'Tempranillo Rosé', 'Syrah Rosé', 'Cabernet Sauvignon Rosé', 'Zinfandel Rosé', 'Tavel Rosé', 'Provence Rosé', 'Mourvèdre Rosé', 'Pinot Noir Rosé'];
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {varietals.map((varietal, index) => <VarietalButton type={wineType} varietal={varietal} navigate={navigation.navigate} key={index} />)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  }
});

export default WineVarietal;
