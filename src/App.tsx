import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ScreenManager from './screens/ScreenManager'

export default function(){
  return(
    <NavigationContainer>
      <StatusBar
        backgroundColor="#FFA500"
      />
      <ScreenManager/>
    </NavigationContainer>
  )
}