import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const TransactionCard = () => {
  return (
    <View className=' flex-col w-[330px] bg-white h-[700px] rounded-lg shadow-xl m-5'>
    <View className=' m-4 flex-row justify-between'>
      <Text className='text-xl font-bold'>Transactions</Text>
      <TouchableOpacity>
        <Text className='text-lg font-semibold text-gray-500'>See all</Text>
        </TouchableOpacity>
    </View>
     <View className=' m-4 flex-row items-start justify-between'>
         <FontAwesome size={32} name='dollar'/>
         <Text className='text-2xl font-bold mx-1'>Groceries</Text>
         <Text className='text-2xl font-bold mx-1'>$1000</Text>
    </View>
    </View>
  )
}

export default TransactionCard  