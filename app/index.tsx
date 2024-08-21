import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
    <View className='flex-1 items-center justify-center max-h-screen'>
      <TextInput className='p-1 border-2 w-48 rounded-md  border-gray-300 m-2'></TextInput>
      <TextInput className='p-1 border-2 w-48 rounded-md  border-gray-300 m-2'></TextInput>
      
        <Text  onPress={()=>router.navigate("/(drawer)/(tabs)/")} className='text-white bg-purple-600 text-lg rounded border-white w-20 text-center font-semibold m-2 p-1 '>
          login
          </Text>

      <StatusBar  />
    </View>
    </GestureHandlerRootView>
  );
}

