import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import Loginpage from '../components/LoginPage';

export default function App() {
  return (
    <GestureHandlerRootView>
    <View className='flex-col items-center bg-gray-100 justify-center h-[800px]'>
     <Loginpage/>
      <StatusBar  />
    </View>
    </GestureHandlerRootView>
  );
}

