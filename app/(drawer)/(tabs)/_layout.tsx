import React from "react";
import { Tabs } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  View,
  GestureResponderEvent,
} from "react-native";
import {
  Piechart,
  Plans,
  Plus,
  User,
  wallet,
} from "../../../components/utils/constants";

interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
}) => (
  <Pressable
    onPress={onPress}
    className="-top-10 justify-center items-center shadow-lg"
  >
    <View
      style={{
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor:'#DAE0E2',
        elevation: 5,
      }}
    >
      {children}
    </View>
  </Pressable>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "blueviolet",
          position: "absolute",
          bottom: 10,
         
          elevation: 10,
          borderRadius: 10,
          height: 80,
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize:5 },
        tabBarInactiveTintColor: "#DAE0E2",
        tabBarActiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Wallet",
          tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                style={{ height: 33, width: 34,marginTop:40 }}
                resizeMode="contain"
                tintColor={focused ? "white" : "#DAE0E2"}
                source={wallet}
              />
              <Text
                className="text-sm "
                style={{ color: focused ? "white" : "#DAE0E2" }}
              >
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          
          title: "Report",
          tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                resizeMode="contain"
                style={{ height: 33, width: 34,marginTop:40 }}
                tintColor={focused ? "white" : "#DAE0E2"}
                source={Piechart}
              />
              <Text
                className="text-sm  "
                style={{ color: focused ? "white" : "#DAE0E2" }}
              >
                
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="addTransaction"
        options={{
          title: "Add",
          tabBarIcon: () => (
            <View className="flex-1 justify-center items-center ">
              <Image
                style={{ height: 30, width: 30, tintColor: "blueviolet",marginTop:40,marginLeft:38 }}
                resizeMode="contain"
                source={Plus}
              />
            </View>
          ),
          headerShown: false,
          tabBarButton: (props: any) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          title: "Planning",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                resizeMode="contain"
                style={{ height: 33, width: 34, marginTop: 40 }}
                tintColor={focused ? "white" : "#DAE0E2"}
                source={Plans}
              />
              <Text
                className="text-sm  "
                style={{ color: focused ? "white" : "#DAE0E2" }}
              >
                
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex-1 justify-center items-center">
              <Image
                resizeMode="contain"
                style={{ height: 33, width: 34, marginTop: 40 }}
                tintColor={focused ? "white" : "#DAE0E2"}
                source={User}
              />
              <Text
                className="text-sm "
                style={{ color: focused ? "white" : "#DAE0E2" }}
              >
                
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
