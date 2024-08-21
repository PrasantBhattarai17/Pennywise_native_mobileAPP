import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Drawer from "expo-router/drawer"

export default function _layout() {
  return (
    <GestureHandlerRootView>
      <Drawer>
      <Drawer.Screen name='(tabs)' options={{
       title:"Home"
    }}></Drawer.Screen>
        <Drawer.Screen name='chats'
        options={{
          title:'Savings'
        }}></Drawer.Screen>
    </Drawer>
    </GestureHandlerRootView>
  )
}

