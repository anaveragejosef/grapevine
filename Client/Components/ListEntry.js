import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';

const ListEntry = ({ entry, navigate }) => {
  const truthChecker = () => {
    if (entry.purchaseAgain) {
      return <Text>Get Again: Yes</Text>;
    }
    return <Text>Get Again: No</Text>;
  };

  return (
    <View>
      <Text>Winery: {entry.winery}</Text>
      <Text>Name: {entry.name}</Text>
      {truthChecker()}
      <Button
        title='See More'
        onPress={() => {
          navigate('WineBottle', {
            entry: entry
          });
        }}
      />
    </View>
  );
}

export default ListEntry;
