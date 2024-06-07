import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from '../styles/gallery.js';

export default function Gallery() {
  return (
    <>
      <Text style={styles.Text}>Gallery</Text>
      <ScrollView horizontal style={styles.container}>
        <Image
          source={require(`../assets/images/1.jpg`)}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require(`../assets/images/2.jpg`)}
          style={styles.image}
        />
        <Image
          source={require(`../assets/images/3.jpg`)}
          style={styles.image}
        />
        <Image
          source={require(`../assets/images/4.jpg`)}
          style={styles.image}
        />
        <Image
          source={require(`../assets/images/5.jpg`)}
          style={styles.image}
        />
        <Image
          source={require(`../assets/images/6.jpg`)}
          style={styles.image}
        />
        <Image
          source={require(`../assets/images/7.jpg`)}
          style={styles.image}
        />
        <Image
          source={require(`../assets/images/8.jpg`)}
          style={styles.image}
        />
      </ScrollView>
    </>
  );
}
