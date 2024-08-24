import { View } from 'react-native';
import MoneyCard from '../../../components/MoneyCard';
import { StatusBar } from 'expo-status-bar';
import BalanceCard from '../../../components/BalanceCard';

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center' >
      <BalanceCard/>
     <MoneyCard/>
     <StatusBar backgroundColor='white'/>
    </View>
  );
}