import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.ibb.co/YtVM9Qv/Image.png' }} style={styles.image}></Image>
      <Image source={{ uri: 'https://i.ibb.co/PDwRhW1/temperature.png' }} style={styles.imagemiddlebot}></Image>
      <Image source={{ uri: 'https://i.ibb.co/XymBJdV/t-EMPO-PARA-TODOS.png' }} style={styles.imagemiddletop}></Image>
      <Image source={{ uri: 'https://i.ibb.co/7zMR8F4/15-fog-line.png' }} style={styles.imageBottom}></Image>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    position: 'relative'
  },
  image: {
    position: 'absolute',
    top: 75,
    width: 116,
    height: 100,
  },
  imagemiddletop: {
    position: 'absolute',
    top: 300,
    width: 130,
    height: 50,
    resizeMode: 'contain'
  },
  imagemiddlebot: {
    position: 'absolute',
    top: 500,
    width: 283.5,
    height: 80,
  },
  imageBottom: {
    position: 'absolute',
    top: 700,
    width: 48,
    height: 48
  }
});