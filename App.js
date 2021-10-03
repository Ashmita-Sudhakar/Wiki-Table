import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from  './navigation/DrawerNavigation'; 
import TabNavigator from '../navigation/TabNavigator ';

export default function App(){
  return(
    <NavigationContainer> 
    <DrawerNavigator/>
    </NavigationContainer>
  )
}