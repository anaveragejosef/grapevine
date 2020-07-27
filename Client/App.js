import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen.js';
import WineType from './Components/WineType.js';
import WineVarietal from './Components/WineVarietal.js';
import WineList from './Components/WineList.js';
import WineBottle from './Components/WineBottle.js';
import EditWineBottle from './Components/EditWineBottle.js';
import WineForm from './Components/WineForm.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E63946',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Helvetica',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to Grapevine!' }}
        />
        <Stack.Screen
          name="WineForm"
          component={WineForm}
          options={{ title: 'Add a New Wine' }}
        />
        <Stack.Screen
          name="WineType"
          component={WineType}
          options={{ title: 'Select a Wine Type' }}
        />
        <Stack.Screen
          name="WineVarietal"
          component={WineVarietal}
          options={{ title: 'Select a Varietal' }}
        />
        <Stack.Screen
          name="WineList"
          component={WineList}
          options={{ title: 'Your Wine List' }}
        />
        <Stack.Screen
          name="WineBottle"
          component={WineBottle}
          options={{ title: 'Wine Review' }}
        />
        <Stack.Screen
          name="EditWineBottle"
          component={EditWineBottle}
          options={{ title: 'Edit Wine Review' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
