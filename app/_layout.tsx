import { View, Text, StyleSheet, Image } from 'react-native';

import ImagemTeste from '../assets/images/cloud.png'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image src={ImagemTeste} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e'
  },
  image: {
    marginTop: 30,
    marginBottom: 10,
    width: '20%',
    height: 200,
  }
});