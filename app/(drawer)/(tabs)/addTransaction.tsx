import { View, Text } from 'react-native'
import React from 'react'
import AddOne from '../../../components/AddOne'

const addTransaction = () => {
  return (
    <View className='flex-1 w-[360px] h-48 bg-gray-300 p-2 items-center '>
    <AddOne/>
    </View>
  )
}

export default addTransaction