import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title='Add a New Wine'
          onPress={() => navigation.navigate('WineForm')}
        />
      </View>
      <View>
        <Button
          title='View Wine List'
          onPress={() => navigation.navigate('WineType')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
