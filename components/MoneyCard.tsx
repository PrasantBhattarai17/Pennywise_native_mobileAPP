import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


const MoneyCard = () => {
  return (
    <ScrollView>
        <View className=' m-5 flex-1 flex-col w-64  h-44 border-2 border-gray-200 bg-white rounded-lg shadow-xl'>
      <View className='flex-1 flex-row justify-center my-2 '>
        <FontAwesome color='gray' size={24} name='dollar'/>
        <Text className='text-xl mx-2 text-gray-500 font-semibold'>Earnings</Text>
      </View>
      <View className='flex-1 flex-row justify-center items-center'>
        <Text className='text-4xl'>$924.67</Text>
        <Text>12%<FontAwesome name='arrow-up'color='green'/></Text>
      </View>
      <View>
      <Text className='text-xl'>+112 than last Month</Text>
      </View>
        </View>
    </ScrollView>
  )
}

export default MoneyCard