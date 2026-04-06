import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';
const screenHeight = Dimensions.get('window').height;

const Cardlg = () => {
    return (
        <View style={{ minHeight: screenHeight * 0.75 }} className="w-full  border my-4">
            <Text></Text>
        </View>
    )
}

export default Cardlg;