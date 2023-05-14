import React from 'react';
import {StyleSheet} from 'react-native';
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
          options={{
            title:'SOBRE',
            headerStyle:{
              backgroundColor:'#FFA500',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerTitleAlign:'center',
          }}
        />
        <BottomTabNavigator.Screen
          name="Hobbies"
          component={Hobbies}
          options={{
            title:'HOBBIES',
            headerStyle:{
              backgroundColor:'#FFA500',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerTitleAlign:'center',
          }}
        />
        <BottomTabNavigator.Screen
          name="Main"
          component={Main}
          options={{
            title:'MENU PRINCIPAL',
            headerStyle:{
              backgroundColor:'#FFA500',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerTitleAlign:'center',
          }}
        />
        <BottomTabNavigator.Screen
          name="Education"
          component={Education}
          options={{
            title:'EDUCAÇÃO',
            headerStyle:{
              backgroundColor:'#FFA500',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerTitleAlign:'center',
          }}
        />
        <BottomTabNavigator.Screen
          name="Experience"
          component={Experience}
          options={{
            title:'EXPERIÊNCIA',
            headerStyle:{
              backgroundColor:'#FFA500',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerTitleAlign:'center',
          }}
        />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  )
}