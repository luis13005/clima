import { View, Image } from 'react-native';
import { styles, Logo } from './_layout';


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image source={Logo} />
        </View>
    );
}
