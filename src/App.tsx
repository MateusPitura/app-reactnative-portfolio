import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Root from './screens/Root'

export default function(){
  return(
    <NavigationContainer>
      <StatusBar
        backgroundColor="#FFA500"
      />
      <Root/>
    </NavigationContainer>
  )
}