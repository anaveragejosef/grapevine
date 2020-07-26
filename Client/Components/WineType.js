import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const WineType = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title='Red'
          onPress={() => {
            navigation.navigate('WineVarietal', {
              wineType: 'Red'
            });
          }}
        />
        <Button
          title='White'
          onPress={() => {
            navigation.navigate('WineVarietal', {
              wineType: 'White'
            });
          }}
        />
        <Button
          title='Rose'
          onPress={() => {
            navigation.navigate('WineVarietal', {
              wineType: 'Rose'
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default WineType;
