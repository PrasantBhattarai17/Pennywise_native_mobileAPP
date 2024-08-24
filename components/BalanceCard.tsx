import { View, Text } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const BalanceCard = () => {
  return (
    <View className=' flex-col h-36 m-4 bg-white w-[300px] border-2 border-gray-200 shadow-xl rounded-md '>
      <Text className='text-xl text-gray-500 font-semibold'><MaterialCommunityIcons name='cash' size={28}/>Total balance</Text>
    </View>
  )
}

export default BalanceCard