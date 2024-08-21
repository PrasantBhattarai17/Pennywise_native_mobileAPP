import {  useRouter } from 'expo-router';
import { Formik } from 'formik';
import {  Text, TouchableOpacity, View } from 'react-native';
import {  TextInput } from 'react-native-gesture-handler';

export default function Loginpage() {
  const router=useRouter();
  console.log("Router Object:", router);
  const handlesubmit=()=>{
    router.navigate('/(drawer)/(tabs)/')
  }
  return (
    <Formik
    initialValues={{username:'',password:''}}
    onSubmit={handlesubmit}
    >
    
    {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleSubmit,
        handleReset
      }) => (<View className='flex-col items-center justify-center w-[85%] h-[55%]   shadow-xl rounded bg-white'>
      <Text className='text-xl  font-bold text-purple-600 p-1 m-2'>Login to your Account</Text>
      <TextInput onChangeText={handleChange('username')} value={values.username} placeholder='Enter Username' inputMode='text' className='p-2 border-2 w-56 rounded-md  border-gray-300 m-3'></TextInput>
      <TextInput onChangeText={handleChange('password')} value={values.password} placeholder='Enter password' inputMode='text' secureTextEntry className='p-2 border-2 w-56 rounded-md  border-gray-300 m-3'></TextInput>
      
        <TouchableOpacity onPress={()=>handleSubmit()}><Text className='text-white bg-purple-600 text-2xl rounded border-white w-28 text-center font-bold m-2 p-1 '>
          login
          </Text></TouchableOpacity>
          <TouchableOpacity><Text className='text-lg  font-semibold text-gray-500 p-1 '>Forget password?</Text></TouchableOpacity>
          <View className='flex-row items-center justify-center my-2 space-x-1'>
          <Text className='text-lg  font-semibold text-black  '>New here?</Text>
          <TouchableOpacity><Text className='text-lg  font-semibold text-gray-500  '>Sign Up</Text></TouchableOpacity>
          </View>
    </View>)
}
    </Formik>
  );
}

