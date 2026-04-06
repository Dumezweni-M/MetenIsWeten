import "../global.css";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SafeAreaWrapper from "../components/SafeAreaWrapper";



export default function App() {
  return (
    <SafeAreaWrapper>
        <View className="flex-1 items-center justify-center bg-white ">
          <Text className="text-xl font-bold text-blue-500">Connect Router</Text>
          {/* <StatusBar style="hidden" /> */}
        </View>      
    </SafeAreaWrapper>
  );
}