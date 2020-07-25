import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Grapevine</Text>
      </View>
      <View>
        <Button title='Add a New Wine' />
      </View>
      <View>
        <Button title='View Wine List' />
      </View>
    </SafeAreaView>
  );
}

export default App;
