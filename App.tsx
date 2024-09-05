import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Componente01 from './src/practica_oficial/Componente01';
import Props02 from './src/practica_oficial/Props02';
import Axios03 from './src/practica_oficial/Axios03';
import AsyncStorage04 from './src/practica_oficial/AsyncStorage04';


//import ApiFetch from './src/Practica02/ApiFetch';
//import DataManager from './src/Practica02/DataManager';
//import MainComponent from './src/Practica02/MainComponent';
//import UserDetails from './src/Practica02/UserDetails';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Componente01 ">
        <Stack.Screen name="Componente01 " component={Componente01} />
        <Stack.Screen name="Props02" component={Props02} />
        <Stack.Screen name="Axios03" component={Axios03} />
        <Stack.Screen name="AsyncStorage04" component={AsyncStorage04}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
