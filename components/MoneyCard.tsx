import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { CardsData } from "./utils/constants";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";


const MoneyCard = () => {
  return (
    <ScrollView  >
      {CardsData.map((item) => (
        <View
        key={item?.amount}
        className=" m-5 flex-1 flex-col w-[300px]  h-44 border-2 border-gray-200 bg-white rounded-lg shadow-xl"
        >
          <TouchableOpacity onPress={()=>{router.navigate(item?.navPage)}} className="flex-1">
          <View className="flex-1 flex-row justify-center my-2 ">
            <MaterialCommunityIcons color="gray" size={24} name={item?.iconLabel} />
            <Text className="text-xl mx-2 text-gray-500 font-semibold">
              {item?.name}
            </Text>
          </View>
          <View className="flex-1 flex-row justify-center items-center pl-3">
            <Text className="text-5xl font-bold">${item?.amount}</Text>
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
          <View className="flex-1 flex-row justify-center items-center">
            <Text className={`text-lg text-center mx-1 bg-gray-100 ${
                item?.isincrease ? "text-green-600" : "text-red-600"
              } rounded-lg`}>
              {item?.changedAmount}
            </Text>
            <Text className="text-lg  text-gray-500 font-semibold">
              than last Month
            </Text>
          </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default MoneyCard;
