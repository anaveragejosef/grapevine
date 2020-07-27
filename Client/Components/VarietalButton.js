import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const VarietalButton = ({ varietal, type, navigate }) => {
  return (
    <View style={styles.button}>
      <Button
        title={varietal}
        color='#FFFFFF'
        onPress={() => {
          navigate('WineList', {
            wineType: type,
            wineVarietal: varietal
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderColor: '#E63946',
    backgroundColor: '#E63946',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 20,
    margin: 10,
  }
});

export default VarietalButton;
