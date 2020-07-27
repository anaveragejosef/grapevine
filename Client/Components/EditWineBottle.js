import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const EditWineBottle = ({ route, navigation }) => {
  const { entry } = route.params;
  let [winery, setWinery] = useState(entry.winery);
  let [name, setName] = useState(entry.name);
  let [varietal, setVarietal] = useState(entry.varietal);
  let [vintage, setVintage] = useState(entry.vintage.toString());
  let [notes, setNotes] = useState(entry.notes);
  let [purchaseAgain, setRepeat] = useState(entry.purchaseAgain.toString());

  const updateWine = () => {
    if (validateInputs()) {
      let type = getWineType();
      updateRecord(type);
    } else {
      return;
    }
  }

  const validateInputs = () => {
    if (winery === '' || name === '' || varietal === '' || vintage === '') {
      return false;
    } else {
      return true;
    }
  }

  const getWineType = () => {
    const reds = ['Cabernet Franc', 'Cabernet Sauvignon', 'Grenache', 'Malbec', 'Merlot', 'Mourvèdre', 'Petite Sirah', 'Petite Verdot', 'Pinot Noir', 'Sangiovese', 'Syrah', 'Red Blend', 'Tempranillo', 'Zinfandel'];
    const whites = ['Chardonnay', 'Sauvignon Blanc', 'Pinot Grigio', 'Pinot Gris', 'Riesling', 'Muscat/Moscato', 'White Blend', 'Pinot Blanc'];
    const roses = ['Grenache Rosé', 'Sangiovese Rosé', 'Tempranillo Rosé', 'Syrah Rosé', 'Cabernet Sauvignon Rosé', 'Zinfandel Rosé', 'Tavel Rosé', 'Provence Rosé', 'Mourvèdre Rosé', 'Pinot Noir Rosé'];
    if (reds.indexOf(varietal) > -1) {
      return 'Red';
    } else if (whites.indexOf(varietal) > -1) {
      return 'White';
    } else {
      return 'Rose';
    }
  }

  const updateRecord = (type) => {
    const another = purchaseAgain === 'true' ? true : false;
    axios.put('http://localhost:3000/api/wine-list/update', {
        id: entry['_id'],
        winery: winery,
        name: name,
        wineType: type,
        varietal: varietal,
        vintage: vintage,
        notes: notes,
        purchaseAgain: another
      })
      .then(response => {
        navigation.navigate('WineBottle', {
          entry: JSON.parse(response.config.data)
        });
      })
      .catch(error => {
        console.log(`Error when updating entry: ${error}`);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.textStyle}>Winery: </Text>
          <TextInput
            onChangeText={newWinery => setWinery(newWinery)}
            value={winery}
            maxLength={100}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Name: </Text>
          <TextInput
            onChangeText={newName => setName(newName)}
            value={name}
            maxLength={100}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Varietal: </Text>
          <TextInput
            onChangeText={newVarietal => setVarietal(newVarietal)}
            value={varietal}
            maxLength={20}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Vintage: </Text>
          <TextInput
            onChangeText={newVintage => setVintage(newVintage)}
            value={vintage}
            keyboardType={'numeric'}
            maxLength={4}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Notes: </Text>
          <TextInput
            onChangeText={newNotes => setNotes(newNotes)}
            value={notes}
            maxLength={280}
            multiline={true}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Get Again?</Text>
          <Picker
            selectedValue={purchaseAgain}
            onValueChange={currentRepeat => setRepeat(currentRepeat)}
            style={styles.outerPicker}
            itemStyle={styles.innerPicker}
          >
            <Picker.Item label='Yes' value='true' />
            <Picker.Item label='No' value='false' />
          </Picker>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button
              title='Save Changes'
              onPress={() => {
                updateWine();
              }}
              color='#E63946'
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title='Cancel'
              color='#E63946'
              onPress={() => {
                navigation.navigate('WineBottle', {
                  entry: entry
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  textStyle: {
    fontFamily: 'Helvetica'
  },
  inputStyle: {
    width: '95%',
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
  },
  outerPicker: {
    margin: 10,
    height: 88,
    borderColor: '#E63946',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  innerPicker: {
    height: 88
  }
});

export default EditWineBottle;
