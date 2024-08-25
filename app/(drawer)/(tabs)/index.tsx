import { View } from 'react-native';
import MoneyCard from '../../../components/MoneyCard';
import { StatusBar } from 'expo-status-bar';
import BalanceCard from '../../../components/BalanceCard';
import TransactionCard from '../../../components/TransactionCard';
import { RefreshControl,ScrollView } from 'react-native';
import { useState } from 'react';

export default function TabOneScreen() {
  const [refresh,setRefresh]=useState<boolean>(false);

  const pullToRefresh=()=>{
    setRefresh(true);

    setTimeout(()=>{

    setRefresh(false)
    },
    2000
    )
  };

  return (
    <ScrollView
    refreshControl={
      <RefreshControl
      refreshing={refresh}
      onRefresh={()=>pullToRefresh()}
      />
    }
    >
    <View className='flex-1 items-center justify-center ' >
      <BalanceCard/>
     <MoneyCard/>
     <TransactionCard/>
     <StatusBar backgroundColor='white'/>
    </View>
    </ScrollView>
  );
}