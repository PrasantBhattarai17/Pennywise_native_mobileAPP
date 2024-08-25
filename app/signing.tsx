import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import SignUpPage from '../components/signUpPage'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Logo } from '../components/utils/constants'

const signing = () => {
  return (
    <GestureHandlerRootView>
    <View className='flex-col items-center bg-gray-100 justify-evenly  h-[800px]'>
      <View className='flex-col  h-[50px]'>
        <Image className='w-72 h-20' source={Logo} />
        <Text className='text-lg  font-semibold text-gray-500 text-center '>Save Smart,Live Wise!</Text>
        </View>
     <SignUpPage/>
      <StatusBar  backgroundColor='white'/>
    </View>
    </GestureHandlerRootView>
  )
}

export default signing