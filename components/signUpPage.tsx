import {  useRouter } from 'expo-router';
import { Formik } from 'formik';
import {  Text, TouchableOpacity, View } from 'react-native';
import {  TextInput } from 'react-native-gesture-handler';
import { LoginSchema } from './helper/loginSchema';
import { useState } from 'react';

const SignUpPage = () => {
    const router=useRouter();
    const [error,setError]=useState<string>('');
    const Loginrequest=async(username:string,password:string,email:string)=>{
      try {
        const response = await fetch('https://financemanager-1iok.onrender.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
            email,
          }),
        });
  
        const data = await response.text();
        console.log(data);
        if (response.ok) {
          router.navigate('/getDOtp');
        } else {
          setError('Authorization Failed');      }
      } catch (error) {
        console.error('Error during login request:', error);
      }
    }
     const handlesubmit=(values:any)=>{
      Loginrequest(values.username, values.password,values.email);
    }
  return (
    <Formik
    initialValues={{username:'',password:'',email:''}}
    onSubmit={handlesubmit}
    validationSchema={LoginSchema}
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
      <Text className='text-xl  font-bold text-purple-600 p-1 m-2 my-4'>Create a new Account</Text>
      <TextInput onChangeText={handleChange('email')} value={values.email} placeholder='Enter Email' inputMode='text' className='p-2 border-2 w-56 rounded-md  border-gray-300 m-3'></TextInput>
      {touched&&errors.email&&<Text className='text-red-600 text-md '>{errors.email}</Text>}
      <TextInput onChangeText={handleChange('username')} value={values.username} placeholder='Enter Username' inputMode='text' className='p-2 border-2 w-56 rounded-md  border-gray-300 m-3'></TextInput>
      {touched&&errors.username&&<Text className='text-red-600 text-md '>{errors.username}</Text>}
      <TextInput onChangeText={handleChange('password')} value={values.password} placeholder='Enter password' inputMode='text' secureTextEntry className='p-2 border-2 w-56 rounded-md  border-gray-300 m-3'></TextInput>
      {touched&&errors.password&&<Text className='text-red-600 text-md '>{errors.password}</Text>}
      {touched&&error&&<Text className='text-red-600 text-md '>{error}</Text>}
        <TouchableOpacity onPress={()=>handleSubmit()}><Text className='text-white bg-purple-600 text-2xl rounded border-white w-28 text-center font-bold m-2 p-1 '>
          Sign Up
          </Text></TouchableOpacity>
          <View className='flex-row items-center justify-center my-2 space-x-1'>
          <Text className='text-lg  font-semibold text-black  '>Already registered?</Text>
          <TouchableOpacity onPress={()=>router.back()}><Text className='text-lg  font-semibold text-gray-500  '>Login</Text></TouchableOpacity>
          </View>
    </View>)
}
    </Formik>
  );
};

export default SignUpPage