import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import axios from 'axios';

const WineList = ({ route, navigation }) => {
  const { wineType, wineVarietal } = route.params;
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/wine-list/all', {
      params: {
        wineType: wineType,
        varietal: wineVarietal
      }
    })
      .then(response => {
        console.log('Response: ', response);
      })
      .catch(error => {
        console.log(`Error on GET request: ${error}`);
      });
  });

  return (
    <SafeAreaView>
      <View>
        <Text>WineList!</Text>
      </View>
    </SafeAreaView>
  );
}

export default WineList;
