import { View } from 'react-native';
import MoneyCard from '../../../components/MoneyCard';
import { StatusBar } from 'expo-status-bar';
import BalanceCard from '../../../components/BalanceCard';
import TransactionCard from '../../../components/TransactionCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen() {
  return (
    <ScrollView>
    <View className='flex-1 items-center justify-center ' >
      <BalanceCard/>
     <MoneyCard/>
     <TransactionCard/>
     <StatusBar backgroundColor='white'/>
    </View>
    </ScrollView>
  );
}