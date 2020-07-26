import 'react-native-gesture-handler';
import React from 'react';
import { View, Button } from 'react-native';

const VarietalButton = ({ varietal, type, navigate }) => {
  return (
    <View>
      <Button
        title={varietal}
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

export default VarietalButton;
