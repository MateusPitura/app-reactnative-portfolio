import React from 'react';
import {View, Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StyleBottomTabNavigator from '../style/bottom-tab-navigator'
import StyleText from '../style/text'

import Main from './Main';
import About from './About';
import Hobbies from './Hobbies';
import Education from './Education';
import Experience from './Experience';

import IconMain from '../assets/icons/main.svg'
import IconAbout from '../assets/icons/about.svg'
import IconHobbies from '../assets/icons/hobbies.svg'
import IconEducation from '../assets/icons/education.svg'
import IconExperience from '../assets/icons/experience.svg'

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
            tabBarIcon:({focused})=>(
              <View style={StyleBottomTabNavigator.iconLayout}>
                <IconAbout width={40} height={40}/>
                <Text style={[StyleText.label, {color: focused?'#fff':'#000'}]}>
                  Sobre
                </Text>
              </View>
            )
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
            tabBarIcon:({focused})=>(
              <View style={StyleBottomTabNavigator.iconLayout}>
                <IconExperience width={40} height={40}/>
                <Text style={[StyleText.label, {color: focused?'#fff':'#000'}]}>
                  Experiência
                </Text>
              </View>
            )
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
            tabBarIcon:()=>(
              <View style={StyleBottomTabNavigator.iconLayout}>
                <IconMain width={50} height={50}/>
              </View>
            )
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
            tabBarIcon:({focused})=>(
              <View style={StyleBottomTabNavigator.iconLayout}>
                <IconEducation width={40} height={40}/>
                <Text style={[StyleText.label, {color: focused?'#fff':'#000'}]}>
                  Educação
                </Text>
              </View>
            )
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
            tabBarIcon:({focused})=>(
              <View style={StyleBottomTabNavigator.iconLayout}>
                <IconHobbies width={40} height={40}/>
                <Text style={[StyleText.label, {color: focused?'#fff':'#000'}]}>
                  Hobbies
                </Text>
              </View>
            )
          }}
        />        
      </BottomTabNavigator.Navigator>
  )
}