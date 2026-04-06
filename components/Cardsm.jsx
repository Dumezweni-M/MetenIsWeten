import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

const Cardmd = () => {
    return (
        <View style={{ minHeight: screenHeight * 0.30 }} className="w-full  border mb-4">
            <Text></Text>
        </View>
    )
}

export default Cardmd;