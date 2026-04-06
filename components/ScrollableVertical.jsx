import React from 'react';
import { ScrollView } from 'react-native';

const VerticalScroll = ({ children }) => {
    return (
        <ScrollView 
        className="flex-1 w-[95%] px-2 pt-8 mb-18 " 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        >
            {children}
        </ScrollView>
    );
};

export default VerticalScroll;