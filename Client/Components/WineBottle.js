import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, Image } from 'react-native';
import axios from 'axios';

const WineBottle = ({ route, navigation }) => {
  const { entry } = route.params;
  const truthChecker = () => {
    if (entry.purchaseAgain) {
      return <Text>Get Again: Yes</Text>;
    }
    return <Text>Get Again: No</Text>;
  };

  const imageChecker = () => {
    if (entry.wineImage === '') {
      return;
    }
    return (
      <Image
        source={{ uri: entry.wineImage }}
        style={{ width: 200, height: 200 }}
      />
    )
  }
  const deleteRecord = (id) => {
    axios.delete('http://localhost:3000/api/wine-list/remove', {
        params: {
          id: id
        }
      })
      .then(response => {
        navigation.navigate('WineList', {
          wineType: entry.wineType,
          wineVarietal: entry.varietal
        });
      })
      .catch(err => console.log(`Error on deletion request: ${err}`));
  }

  return (
    <SafeAreaView style={styles.container}>
      {imageChecker()}
      <View style={styles.textWrapper}>
        <Text>Winery: {entry.winery}</Text>
        <Text>Name: {entry.name}, {entry.vintage}</Text>
        <Text>Varietal: {entry.varietal}</Text>
        <Text>Notes: {entry.notes}</Text>
        {truthChecker()}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonStyle}>
          <Button
            title='Home'
            color='#E63946'
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title='Edit Record'
            color='#E63946'
            onPress={() => {
              navigation.navigate('EditWineBottle', {
                entry: entry
              });
            }}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title='Delete Record'
            color='#E63946'
            onPress={() => {
              deleteRecord(entry['_id']);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textWrapper: {
    width: 'auto',
    textAlign: 'center',
    borderColor: '#E63946',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
    margin: 10,
    fontFamily: 'Helvetica'
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  buttonStyle: {
    textAlign: 'center',
    borderColor: '#E63946',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 5
  }
});

export default WineBottle;
