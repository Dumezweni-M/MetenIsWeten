import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
/* Menu = Hamburger, Orbit = Aesthetic Logo Option */
import { Menu, Orbit, Search } from 'lucide-react-native';

export default function Header() {
  return (
    <View className="flex-row justify-between items-center px-4 py-4 bg-white w-full border-b border-gray-300">
      
      {/* 1. The Hamburger Menu */}

      {/* 2. The Logo (Abstract "Orbit" for Flow/Balance) */}
      <View className="flex-row items-center space-x-2">
      <TouchableOpacity onPress={() => console.log("Open Drawer")}>
        <Menu size={28} color="#1f2937" strokeWidth={2} />
      </TouchableOpacity>
        <Text className="text-3xl font-extrabold tracking-tight text-gray-900 ml-2">
          IKIGAI
        </Text>
      </View>

      {/* 3. Action Icon (Optional Placeholder for symmetry) */}
      <TouchableOpacity>
        <View className="bg-black/60 p-2 rounded-xl rounded-tl">
          <Orbit size={24} color="white" strokeWidth={1.5} />
        </View>
      </TouchableOpacity>
      
    </View>
  );
}