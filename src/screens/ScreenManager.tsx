import React from 'react';
import {Text} from 'react-native'
import StyleBottomTabNavigator from '../style/bottom-tab-navigator'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from './Main';
import About from './About';
import Hobbies from './Hobbies';
import Education from './Education';
import Experience from './Experience';

const BottomTabNavigator = createBottomTabNavigator();

export default function(){
  return(
      <BottomTabNavigator.Navigator 
        initialRouteName="Main" 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle:[StyleBottomTabNavigator.background]
        }}
      >
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
            // tabBarIcon:()=>(
            //   <Text></Text>
            // )
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
  )
}