import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const WineBottle = ({ route, navigation }) => {
  const { entry } = route.params;
  const truthChecker = () => {
    if (entry.purchaseAgain) {
      return <Text>Get Again: Yes</Text>;
    }
    return <Text>Get Again: No</Text>;
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Winery: {entry.winery}</Text>
        <Text>Name: {entry.name}, {entry.vintage}</Text>
        <Text>Varietal: {entry.varietal}</Text>
        <Text>Notes: {entry.notes}</Text>
        {truthChecker()}
      </View>
      <View>
        <Button
          title='Home'
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default WineBottle;
