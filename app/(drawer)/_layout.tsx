import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Drawer from "expo-router/drawer"
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function _layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
      screenOptions={{
       headerStyle:{backgroundColor:'blueviolet'},
       headerTintColor:"white"
      }}>
      <Drawer.Screen name='(tabs)' options={{
       title:"Overview",
       drawerActiveTintColor:'blueviolet',
       drawerIcon:({focused})=><MaterialCommunityIcons name='view-grid-outline' color={focused?'blueviolet':'gray'} size={32}/>
    }}></Drawer.Screen>
        <Drawer.Screen name='savings'
        options={{
          title:'Savings',
          drawerActiveTintColor:'blueviolet',
          drawerIcon:({focused})=><MaterialCommunityIcons name='piggy-bank-outline' color={focused?'blueviolet':'gray'} size={32}/>
        }}></Drawer.Screen>
        <Drawer.Screen name='transactions'
        options={{
          title:'Transactions',
          drawerActiveTintColor:'blueviolet',
          drawerIcon:({focused})=><MaterialCommunityIcons name='swap-horizontal' color={focused?'blueviolet':'gray'} size={32}/>
        }}></Drawer.Screen>
        <Drawer.Screen name='billing'
        options={{
          title:'Billings',
          drawerActiveTintColor:'blueviolet',
          drawerIcon:({focused})=><MaterialCommunityIcons name='receipt' color={focused?'blueviolet':'gray'} size={32}/>
        }}></Drawer.Screen>
    </Drawer>
    </GestureHandlerRootView>
  )
}

