import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextInput } from "react-native-gesture-handler";

const AddOne = () => {
  return (
    <View className="flex-1 w-[100%] items-center">
      <View className="flex-col w-[90%] h-20 bg-[#8a2be2] justify-center  items-center rounded-lg">
        <Text className="text-2xl font-bold text-[#fff]">Add Transactions</Text>
      </View>
      <View className="flex-row w-[98%]  m-5 justify-between">
        <TouchableOpacity>
          <Text className="text-xl bg-white w-32 text-center p-2 rounded font-semibold m-2 text-[#8a2be2]">
            Earnings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-xl bg-white w-32 text-center p-2 rounded font-semibold m-2 text-[#8a2be2] ">
            Expenses
          </Text>
        </TouchableOpacity>
      </View>
      <View className="w-[99%] flex-column bg-white  rounded space-y-1 shadow-xl">
        <View className="flex-row">
          <TextInput
            placeholder="Description"
            className="rounded w-[60%] p-2 border-[#8a2be2] m-0 border-2 h-16"
          ></TextInput>
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
            className="w-[40%] p-2  border-[#8a2be2]  m-0 border-y-2 border-r-2 h-16"
          ></TextInput>
        </View>
        <View className="flex-row items-center">
          <TextInput
            placeholder="Category"
            className="w-[60%] p-2 rounded border-[#8a2be2] m-0 border-2 h-16"
          ></TextInput>
          <TouchableOpacity className="w-[30%]">
          <Text className="text-2xl pt-2 rounded shadow-lg  font-bold w-[100%]  ml-4 text-center items-center bg-[#8a2be2] text-white h-12">
            Add
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddOne;
