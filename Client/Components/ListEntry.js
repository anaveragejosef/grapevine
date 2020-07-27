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
    <View style={styles.wrapper}>
      <Text>Winery: {entry.winery}</Text>
      <Text>Name: {entry.name}</Text>
      {truthChecker()}
      <Button
        title='See More'
        color='#E63946'
        onPress={() => {
          navigate('WineBottle', {
            entry: entry
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 'auto',
    borderColor: '#E63946',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
    margin: 10,
    fontFamily: 'Helvetica'
  }
});

export default ListEntry;
