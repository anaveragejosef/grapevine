import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const WineType = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title='Red'
          onPress={() => {
            navigation.navigate('WineForm', {
              wineType: 'red';
            });
          }}
        />
        <Button
          title='White'
          onPress={() => {
            navigation.navigate('WineForm', {
              wineType: 'white';
            });
          }}
        />
        <Button
          title='Rose'
          onPress={() => {
            navigation.navigate('WineForm', {
              wineType: 'rose';
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default WineType;
