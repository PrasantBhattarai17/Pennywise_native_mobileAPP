import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { financialCategories } from './utils/constants';


const Item=({item}:any)=>{
  return(
  <View className=' m-4 flex-row items-start justify-between'>
  <FontAwesome size={28} name={item?.isIncome?'dollar':'credit-card'}/>
  <Text className='text-xl font-bold mx-1'>{item?.category}</Text>
  <Text className={`text-xl font-bold mx-1 ${item?.isIncome?'text-green-600':'text-red-500'}`}>${item?.amount}</Text>
</View>)
}
const TransactionCard = () => {
  return (
    <View className=' flex-col w-[330px] bg-white h-[700px] rounded-lg shadow-xl m-5'>
    <View className=' m-4 flex-row justify-between'>
      <Text className='text-xl font-bold'>Transactions</Text>
      <TouchableOpacity>
        <Text className='text-lg font-semibold text-gray-500'>See all</Text>
        </TouchableOpacity>
    </View>
    <FlatList
    data={financialCategories}
    renderItem={({item})=><Item item={item}/>}
    keyExtractor={(item,index)=>index.toString()}
    />
    </View>
  )
}

export default TransactionCard  