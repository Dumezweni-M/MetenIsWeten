import "../global.css";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SafeAreaWrapper from "../components/SafeAreaWrapper";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CardSm from "../components/Cardsm";
import Cardmd from "../components/Cardmd";
import Cardlg from "../components/Cardlg";



export default function App() {
  return (
    <SafeAreaWrapper>
        <View className="flex-1 items-center justify-center bg-white ">
          <Header/>

          {/* Main content  */}
          <View className="flex-1">
            <CardSm/>
            <Cardmd/>
            <Cardlg/>
          </View>

          

          <Navbar/>
        </View>      
    </SafeAreaWrapper>
  );
}