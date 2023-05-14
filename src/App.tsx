import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './screens/Main';
import About from './screens/About';
import Hobbies from './screens/Hobbies';
import Education from './screens/Education';
import Experience from './screens/Experience';

const BottomTabNavigator = createBottomTabNavigator();

export default function(){
  return(
    <NavigationContainer>
      <BottomTabNavigator.Navigator initialRouteName="Main">
        <BottomTabNavigator.Screen
          name="About"
          component={About}
          options={{title:'About'}}
        />
        <BottomTabNavigator.Screen
          name="Hobbies"
          component={Hobbies}
          options={{title:'Hobbies'}}
        />
        <BottomTabNavigator.Screen
          name="Main"
          component={Main}
          options={{title:'Main'}}
        />
        <BottomTabNavigator.Screen
          name="Education"
          component={Education}
          options={{title:'Education'}}
        />
        <BottomTabNavigator.Screen
          name="Experience"
          component={Experience}
          options={{title:'Experience'}}
        />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  )
}