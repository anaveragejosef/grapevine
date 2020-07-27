import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const WineType = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button
          title='Red'
          color='#FFFFFF'
          onPress={() => {
            navigation.navigate('WineVarietal', {
              wineType: 'Red'
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='White'
          color='#FFFFFF'
          onPress={() => {
            navigation.navigate('WineVarietal', {
              wineType: 'White'
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title='Rose'
          color='#FFFFFF'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    borderColor: '#E63946',
    backgroundColor: '#E63946',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
    margin: 10,
  }
});

export default WineType;
