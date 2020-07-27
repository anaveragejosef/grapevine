import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const WineForm = ({ navigation }) => {
  let [winery, setWinery] = useState('');
  let [name, setName] = useState('');
  let [varietal, setVarietal] = useState('');
  let [vintage, setVintage] = useState('');
  let [notes, setNotes] = useState('');
  let [purchaseAgain, setRepeat] = useState('Yes');

  const submitWine = () => {
    if (validateInputs()) {
      let type = getWineType();
      fullSend(type);
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

  const fullSend = (type) => {
    const another = purchaseAgain === 'Yes' ? true : false;
    axios.post('http://localhost:3000/api/wine-list/create', {
        winery: winery,
        name: name,
        wineType: type,
        varietal: varietal,
        vintage: vintage,
        notes: notes,
        purchaseAgain: another
      })
      .then(response => {
        navigation.push('WineForm');
      })
      .catch(error => {
        console.log(`Error when creating entry: ${error}`);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.textStyle}>Where's it from?</Text>
          <TextInput
            onChangeText={newWinery => setWinery(newWinery)}
            placeholder='Winery'
            maxLength={100}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>What's it called?</Text>
          <TextInput
            onChangeText={newName => setName(newName)}
            placeholder='Name'
            maxLength={100}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Which varietal?</Text>
          <TextInput
            onChangeText={newVarietal => setVarietal(newVarietal)}
            placeholder='Varietal'
            maxLength={20}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Which year?</Text>
          <TextInput
            onChangeText={newVintage => setVintage(newVintage)}
            placeholder='Vintage'
            keyboardType={'numeric'}
            maxLength={4}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Thoughts?</Text>
          <TextInput
            onChangeText={newNotes => setNotes(newNotes)}
            placeholder='Notes'
            maxLength={280}
            multiline={true}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <Text style={styles.textStyle}>Buy Again?</Text>
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
              title='Submit'
              color='#E63946'
              onPress={() => submitWine()}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title='Home'
              color='#E63946'
              onPress={() => navigation.navigate('Home')}
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

export default WineForm;
