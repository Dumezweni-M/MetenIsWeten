import { SafeAreaProvider, SafeAreaView  } from "react-native-safe-area-context"
import { View } from "react-native"

export default function SafeAreaWrapper ( {children, className } ) {
    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['top', 'bottom']} className="flex-1">
                <View className="flex-1 border">
                    {children}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}