import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import axios from 'axios';
import ListEntry from './ListEntry.js';

const WineList = ({ route, navigation }) => {
  const { wineType, wineVarietal } = route.params;
  const [list, setList] = useState([]);

  useEffect(() => {
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios.get('http://localhost:3000/api/wine-list/all', {
      cancelToken: source.token,
      params: {
        wineType: wineType,
        varietal: wineVarietal
      }
    })
      .then(response => {
        if (!unmounted) setList(response.data);
      })
      .catch(error => {
        if (!unmounted) console.log(`Error on GET request: ${error}`);
      });
    return function () {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
    };
  });

  return (
    <SafeAreaView>
      {list.map(entry => <ListEntry entry={entry} navigate={navigation.navigate} key={entry['_id']} />)}
    </SafeAreaView>
  );
}

export default WineList;
