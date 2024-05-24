import {View, Text, Linking, Image} from 'react-native';
import {styles} from '../styles/footer.js';
import {cssVar} from '../styles/cssVariable.js';

export default function Footer() {
  return (
    <>
      <Text
        style={{
          color: 'white',
          fontSize: 35,
          textAlign: 'center',
          marginVertical: 10,
          fontFamily: cssVar.fonts.shd,
        }}>
        Footer
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.image}
        />
        <Text style={styles.titleText}>Expors</Text>
        <Text style={styles.textTag}>( Executive People of RPL Satu )</Text>
      </View>
      <View style={{height: 10}}></View>
      <View style={styles.footerContainer}>
        <Text
          style={styles.text}
          onPress={() => Linking.openURL('https://smkwiraharapan.sch.id/')}>
          SMK Wira Harapan
        </Text>
      </View>
    </>
  );
}
