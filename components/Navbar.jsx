import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
/* 1. Import the specific icons from the library */
/* Scale = Balance, Sprout = Growth, Waves = Flow, Target = Purpose */
import { Scale, Sprout, Waves, Target } from 'lucide-react-native';

const NavItems = [
  { name: 'Balance', icon: Scale },
  { name: 'Growth', icon: Sprout },
  { name: 'Flow', icon: Waves },
  { name: 'Purpose', icon: Target },
];

export default function Navbar() {
  return (
    /* flex-row moves them horizontal; justify-around spaces them evenly */
    <View className="flex-row justify-around items-center py-4 bg-white border-t border-gray-100 w-full">
      {NavItems.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          className="items-center flex-1"
          onPress={() => console.log(`Navigating to ${item.name}`)}
        >
          {/* 2. Render the Icon component */}
          <item.icon 
            size={24} 
            color="#3b82f6" /* Blue-500 */
            strokeWidth={2} 
          />
          
          <Text className="text-[13px] mt-1 font-medium text-blue-500">
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}