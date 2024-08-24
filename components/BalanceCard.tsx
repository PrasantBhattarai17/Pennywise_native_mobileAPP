import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BalanceCard = () => {
  return (
 
      <View className=" flex-col m-4 border-2  bg-[#fff] border-gray-200 shadow-xl   justify-evenly items-center h-36  w-[300px] rounded-lg  ">
        <View className="flex-row">
        <MaterialCommunityIcons color={'gray'} name="cash" size={32} />
        <Text className="text-xl text-gray-500 font-semibold">
          Total balance
        </Text>
        </View>
        <View>
        <Text className="text-5xl text-[#000] font-bold">$4000.00</Text>
        </View>
      </View>

  );
};

export default BalanceCard;
