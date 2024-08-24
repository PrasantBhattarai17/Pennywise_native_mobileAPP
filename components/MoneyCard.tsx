import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CardsData } from "./utils/constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";


const MoneyCard = () => {
  return (
    <View className="flex-1 flex-row">
      {CardsData.map((item) => (
        <View
        key={item?.amount}
        className="  flex-1  flex-row mx-2   h-32 border-2 border-gray-200 bg-white rounded-lg shadow-xl"
        >
          <TouchableOpacity onPress={()=>{router.navigate(item?.navPage)}} className="flex-1">
          <View className="mt-2 flex-row justify-center  ">
            <MaterialCommunityIcons color="gray" size={20} name={item?.iconLabel} />
            <Text className="text-md  text-gray-500 font-semibold">
              {item?.name}
            </Text>
          </View>
          <View className=" flex-row justify-center items-center my-2 pl-3">
            <Text className="text-3xl font-bold">${item?.amount}</Text>
            <Text
              className={`bg-gray-100 rounded text-md ${
                item?.isincrease ? "text-green-600" : "text-red-600"
              }  m-1`}
            >
              {item?.changedPercent}
              %
              <FontAwesome
                name={item?.isincrease ? "arrow-up" : "arrow-down"}
                color={item?.isincrease ? "green" : "red"}              />
            </Text>
          </View>
          <View className="flex-1 flex-col mt- justify-center items-center">
            <Text className={`text-sm text-center mx-1 bg-gray-100 ${
                item?.isincrease ? "text-green-600" : "text-red-600"
              } rounded-lg`}>
              {item?.changedAmount}
            </Text>
            <Text className="text-sm  text-gray-500 font-semibold">
              than last Month
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default MoneyCard;
