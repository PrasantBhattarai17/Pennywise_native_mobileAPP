import React from 'react';
import { Tabs } from 'expo-router';
import { Image, Pressable, Text, View,GestureResponderEvent } from 'react-native';
import { Piechart, Plans, Plus, User, wallet } from '../../../components/utils/constants';


interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;}

  const CustomTabBarButton = ({ children,onPress }: { children: React.ReactNode, onPress: () => void }) => (
    <Pressable onPress={onPress} className='-top-8 justify-center items-center shadow-lg'>
      <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: '#DAE0E2',elevation:10 }}>
        {children}
      </View>
    </Pressable>
  );
  
  export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { 
          backgroundColor: 'blueviolet',
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 10,
          borderRadius: 10,
          height: 80,
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize: 14, bottom: 15 },
        tabBarInactiveTintColor: 'antiquewhite',
        tabBarActiveTintColor: 'white'
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ focused }) => (
            <View className='flex-1 justify-center items-center'>
              <Image style={{ height: 30, width: 30 }} resizeMode='contain' tintColor={focused ? "white" : "antiquewhite"} source={wallet} />
              <Text className='text-sm ' style={{ color: focused ? 'white' : 'antiquewhite' }}>Wallet</Text>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Report',
          tabBarIcon: ({ focused }) => (
            <View className='flex-1 justify-center items-center'>
              <Image resizeMode='contain' style={{ height: 27, width: 27, marginTop: 3 }} tintColor={focused ? "white" : "antiquewhite"} source={Piechart} />
              <Text className='text-sm  ' style={{ color: focused ? 'white' : 'antiquewhite' }}>Report</Text>
            </View>
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="addTransaction"
        options={{
          title: 'Add',
          tabBarIcon: () => (
            <View className='flex-1 justify-center items-center'>
              <Image style={{ height: 30, width: 30, tintColor: 'blueviolet' }} resizeMode='contain' source={Plus} />
            </View>
          ),
          headerShown: false,
          tabBarButton: (props) => <CustomTabBarButton {...props} />
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          title: 'Planning',
          headerShown: false, 
          tabBarIcon: ({ focused }) => (
            <View className='flex-1 justify-center items-center'>
              <Image resizeMode='contain' style={{ height: 27, width: 27, marginTop: 3 }} tintColor={focused ? "white" : "antiquewhite"} source={Plans} />
              <Text className='text-sm  ' style={{ color: focused ? 'white' : 'antiquewhite' }}>Plans</Text>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className='flex-1 justify-center items-center'>
              <Image resizeMode='contain' style={{ height: 27, width: 27, marginTop: 3 }} tintColor={focused ? "white" : "antiquewhite"} source={User} />
              <Text className='text-sm ' style={{ color: focused ? 'white' : 'antiquewhite' }}>Account</Text>
            </View>
          )
        }}
      />
    </Tabs>
  );
}
