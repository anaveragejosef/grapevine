import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const WineVarietal = ({ route, navigation }) => {
  let { wineType } = route.params;
  let varietals = [];
  if (wineType === 'red') {
    varietals = ['Cabernet Franc', 'Cabernet Sauvignon', 'Grenache', 'Malbec', 'Merlot', 'Mourvèdre', 'Petite Sirah', 'Petite Verdot', 'Pinot Noir', 'Sangiovese', 'Syrah', 'Red Blend', 'Tempranillo', 'Zinfandel'];
  } else if (wineType === 'white') {
    varietals = ['Chardonnay', 'Sauvignon Blanc', 'Pinot Grigio', 'Pinot Gris', 'Riesling', 'Muscat/Moscato', 'White Blend', 'Pinot Blanc'];
  } else {
    varietals = ['Grenache Rosé', 'Sangiovese Rosé', 'Tempranillo Rosé', 'Syrah Rosé', 'Cabernet Sauvignon Rosé', 'Zinfandel Rosé', 'Tavel Rosé', 'Provence Rosé', 'Mourvèdre Rosé', 'Pinot Noir Rosé'];
  }

  return (
    <SafeAreaView>
      <View>
        <Text>WineVarietal!</Text>
      </View>
    </SafeAreaView>
  );
}

export default WineVarietal;
