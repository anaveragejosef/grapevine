import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button
          color='#FFFFFF'
          title='Add a New Wine'
          onPress={() => navigation.navigate('WineForm')}
        />
      </View>
      <View style={styles.button}>
        <Button
          color='#FFFFFF'
          title='View Wine List'
          onPress={() => navigation.navigate('WineType')}
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

export default HomeScreen;
