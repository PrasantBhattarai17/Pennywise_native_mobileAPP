import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
 
  return (
      <GestureHandlerRootView>
      <Stack screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="index" options={{ headerShown:false }} />
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="signing" options={{ headerShown: false }} />
        <Stack.Screen name="getDOtp" options={{ headerShown: false }} />
      </Stack>
      </GestureHandlerRootView>
  );
}
