import {View, Text, Linking, Image} from 'react-native';
import {styles} from '../styles/footer.js';
import {cssVar} from '../styles/cssVariable.js';
import {dataSiswa} from '../data/siswa.js';

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
        About
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.image}
        />
        <Text style={styles.titleText}>Expors</Text>
        <Text style={styles.textTag}>( Executive People of RPL Satu )</Text>
        <Text style={styles.textTag}>Anggota: {dataSiswa.length}</Text>
        <Text
          style={styles.textInformation}
          onPress={() => Linking.openURL('https://smkwiraharapan.sch.id/')}>
          SMK Wira Harapan
        </Text>
        <Text
          style={styles.textInformation}
          onPress={() =>
            Linking.openURL('https://www.ppdb.smkwiraharapan.sch.id/')
          }>
          Klik untuk informasi pendaftaran
        </Text>
      </View>
      <View style={{height: 10}}></View>
    </>
  );
}
