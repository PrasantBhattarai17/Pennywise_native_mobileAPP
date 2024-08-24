import { View } from 'react-native';
import MoneyCard from '../../../components/MoneyCard';
import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen() {
  return (
    <View className='flex-1 items-center justify-center' >
     <MoneyCard/>
     <StatusBar backgroundColor='white'/>
    </View>
  );
}