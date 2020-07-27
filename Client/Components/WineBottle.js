import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import axios from 'axios';

const WineBottle = ({ route, navigation }) => {
  const { entry } = route.params;
  const truthChecker = () => {
    if (entry.purchaseAgain) {
      return <Text>Get Again: Yes</Text>;
    }
    return <Text>Get Again: No</Text>;
  };

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
      <View>
        <Button
          title='Delete Record'
          onPress={() => {
            deleteRecord(entry['_id']);
          }}
        />
      </View>
      <View>
        <Button
          title='Edit Record'
          onPress={() => {
            navigation.navigate('EditWineBottle', {
              entry: entry
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default WineBottle;
