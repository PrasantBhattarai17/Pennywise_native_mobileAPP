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
          tabBarIcon:({focused})=><FontAwesome name='home' color={focused? "#0A79DF": "gray"} size={29}/>,
          tabBarActiveTintColor:'blue',
          headerShown:false}}
         
      />
      <Tabs.Screen
        name="two"
        
        options={{
          title: 'Incomes',
          headerShown:false, 
          tabBarIcon:({focused})=><FontAwesome name='dollar' color={focused? "#0A79DF": "gray"} size={29}/>,        }}
      />
      <Tabs.Screen
        name="expense"
        options={{
          title: 'Expenses',
          headerShown:false,
          tabBarIcon:({focused})=><FontAwesome name='credit-card' color={focused? "#3498DB": "gray"} size={29}/>,        }}
      />
    </Tabs>
  );
}
