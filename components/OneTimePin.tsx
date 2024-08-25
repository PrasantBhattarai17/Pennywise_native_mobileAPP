import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const OneTimePin = () => {
  const [pin, setPin] = useState();
  return (
    <View className="flex-col items-center justify-center w-[85%] h-[55%]   shadow-xl rounded bg-white">
      <Text className="text-xl  font-bold text-purple-600 p-1 m-2 my-4">
        Login to your Account
      </Text>
      <TextInput
        onChangeText={(e: any) => setPin(e)}
        value={pin}
        placeholder="Enter the OTP"
        inputMode="text"
        secureTextEntry
        className="p-3 border-2 w-64 rounded-md  border-gray-300 m-3"
      ></TextInput>
      <TouchableOpacity>
        <Text className="text-white bg-purple-600 text-2xl rounded border-white w-44 text-center font-bold m-2 p-2 ">
          Enter the OTP
        </Text>
      </TouchableOpacity>


      <View className="flex-row">
      <Text className="text-xl  font-bold text-purple-600 p-1 m-2 my-4">
        Didn't get the code?
      </Text>
      <Text className="text-xl  font-bold text-gray-500 p-1 m-2 my-4">
       Resend
        </Text>
      </View>
    </View>
  );
};

export default OneTimePin;
