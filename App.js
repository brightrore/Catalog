import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import sepatu from './screens/sepatu';
import baju from './screens/baju';
import celana from './screens/Celana';
import pilihan from './screens/pilihan';


const navigator = createStackNavigator({
  Home: HomeScreen,
  Celana: celana,
  Sepatu: sepatu,
  Baju: baju,
  Pilihan: pilihan, 
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Men Catalog',
    headerStyle: {
      backgroundColor: 'grey'
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
