import {  useRouter } from 'expo-router';
import {  Text, View } from 'react-native';
import {  TextInput } from 'react-native-gesture-handler';

export default function Loginpage() {
  const router=useRouter();
  console.log("Router Object:", router);
  return (
    <View className='flex-col items-center justify-center w-[85%] h-[60%]   shadow-xl rounded bg-white'>
      <TextInput placeholder='Enter Username' inputMode='text' className='p-2 border-2 w-56 rounded-md  border-gray-300 m-3'></TextInput>
      <TextInput placeholder='Enter password' inputMode='text' secureTextEntry className='p-2 border-2 w-56 rounded-md  border-gray-300 m-3'></TextInput>
      
        <Text onPress={()=>router.push('./(drawer)/(tabs)/')} className='text-white bg-purple-600 text-2xl rounded border-white w-28 text-center font-bold m-2 p-1 '>
          login
          </Text>
    </View>
  );
}

