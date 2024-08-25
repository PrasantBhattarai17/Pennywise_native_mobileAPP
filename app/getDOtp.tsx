import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import { Logo } from '../components/utils/constants';
import OneTimePin from '../components/OneTimePin';
const getDOtp = () => {
  return (
    <GestureHandlerRootView>
    <View className='flex-col items-center bg-gray-100 justify-evenly  h-[800px]'>
      <View className='flex-col  h-[50px]'>
        <Image className='w-72 h-20' source={Logo} />
        <Text className='text-lg  font-semibold text-gray-500 text-center '>Save Smart,Live Wise!</Text>
        </View>
        <OneTimePin/>
      <StatusBar  backgroundColor='white'/>
    </View>
    </GestureHandlerRootView>
  )
}

export default getDOtp