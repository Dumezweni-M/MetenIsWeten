import "./global.css";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'bottom']}  className="flex-1 border m-2">
        <View className="flex-1 items-center justify-center bg-white ">
          <Text className="text-xl font-bold text-blue-500">NativeWind works!</Text>
          {/* <StatusBar style="hidden" /> */}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}