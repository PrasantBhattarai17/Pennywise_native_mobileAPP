import { useRouter } from "expo-router";
import { Formik } from "formik";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LoginSchema } from "./helper/loginSchema";
import { useState } from "react";

export default function Loginpage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const Loginrequest = async (username: string, password: string) => {
    try {
      const response = await fetch(
        "https://financemanager-1iok.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.text();
      console.log(data);
      if (response.ok && data != "User not found  Cant Proceed Further ") {
        router.navigate("/(drawer)/(tabs)/");
      } else {
        setError(data);
      }
    } catch (error) {
      console.error("Error during login request:", error);
    }
  };
  const handlesubmit = (values: any) => {
    Loginrequest(values.username, values.password);
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
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
        handleReset,
      }) => (
        <View className="flex-col items-center justify-center w-[85%] h-[55%]   shadow-xl rounded bg-white">
          <Text className="text-xl  font-bold text-purple-600 p-1 m-2 my-4">
            Login to your Account
          </Text>
          <TextInput
            onChangeText={handleChange("username")}
            value={values.username}
            placeholder="Enter Username"
            inputMode="text"
            className="p-2 border-2 w-56 rounded-md  border-gray-300 m-3"
          ></TextInput>
          {touched && errors.username && (
            <Text className="text-red-600 text-md ">{errors.username}</Text>
          )}
          <TextInput
            onChangeText={handleChange("password")}
            value={values.password}
            placeholder="Enter password"
            inputMode="text"
            secureTextEntry
            className="p-2 border-2 w-56 rounded-md  border-gray-300 m-3"
          ></TextInput>
          {touched && errors.password && (
            <Text className="text-red-600 text-md ">{errors.password}</Text>
          )}
          {error && <Text className="text-red-600 text-md ">{error}</Text>}
          <TouchableOpacity onPress={() => handleSubmit()}>
            <Text className="text-white bg-purple-600 text-2xl rounded border-white w-28 text-center font-bold m-2 p-1 ">
              login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.navigate("/(drawer)/(tabs)/")}>
            <Text className="text-lg  font-semibold text-gray-500 p-1 ">
              Forget password?
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center justify-center my-2 space-x-1">
            <Text className="text-lg  font-semibold text-black  ">
              New here?
            </Text>
            <TouchableOpacity onPress={() => router.push("/signing")}>
              <Text className="text-lg  font-semibold text-gray-500  ">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
