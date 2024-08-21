import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';



export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel:false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon:()=><FontAwesome name='home' color='gray' size={29}/>,
          headerShown:false}}
         
      />
      <Tabs.Screen
        name="two"
        
        options={{
          title: 'Incomes',
          headerShown:false, 
          tabBarIcon:()=><FontAwesome  name='dollar'  color='gray' size={29} />
        }}
      />
      <Tabs.Screen
        name="expense"
        options={{
          title: 'Expenses',
          headerShown:false,
          tabBarIcon:()=><FontAwesome  name='credit-card' color='gray' size={29} />
        }}
      />
    </Tabs>
  );
}
