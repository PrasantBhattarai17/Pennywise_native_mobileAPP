import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Tabs } from 'expo-router';




export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: 'blueviolet',
          position:'absolute',
          bottom:10,
          left:10,
          right:10,
          elevation:10,
          borderRadius:10,
          height:80,
        },
        tabBarShowLabel:false,
        tabBarLabelStyle:{fontSize:14,bottom:15},
        tabBarInactiveTintColor:'antiquewhite',
        tabBarActiveTintColor:'white'
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Wallet',
          tabBarIcon:({focused})=><MaterialCommunityIcons name='wallet' color={focused? "white": "antiquewhite"} size={29}/>,
          headerShown:false}}
          
         
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Report',
          tabBarIcon:({focused})=><FontAwesome name='pie-chart' color={focused? "white": "antiquewhite"} size={29}/>,
          headerShown:false}}
          
         
      />
  
      <Tabs.Screen
        name="addTransaction"
      
        options={{
          title: 'Add',
          tabBarIcon:({focused})=><FontAwesome name='plus' color={focused? "white": "antiquewhite"} size={29}/>,
          headerShown:false}}
          
         
      />
      <Tabs.Screen
        name="plans"
        
        options={{
          title: 'Planning',
          headerShown:false, 
          tabBarIcon:({focused})=><MaterialCommunityIcons name='receipt' color={focused? "white": "antiquewhite"} size={29}/>,        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerShown:false,
          tabBarIcon:({focused})=><FontAwesome name='user' color={focused?  "white": "antiquewhite"} size={29}/>,        }}
      />
    </Tabs>
  );
}
