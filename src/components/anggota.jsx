import {View, Text, ScrollView} from 'react-native';
import {dataSiswa} from '../data/siswa.js';
import {styles} from '../styles/anggota.js';

export default function Anggota() {
  return (
    <>
      <View style={{height: 20}}></View>
      <Text style={styles.textTitle}>Siswa/i X RPL 1</Text>
      {/* header */}
      <View style={styles.containerHeader}>
        <View style={styles.containerAbsen}>
          <Text style={styles.text}>No</Text>
        </View>
        <View style={styles.containerNama}>
          <Text style={styles.text}>Nama</Text>
        </View>
      </View>
      {/* data */}
      {dataSiswa.map((el, i) => (
        <View style={styles.containerHeader} key={i}>
          <View style={styles.containerAbsen} key={i}>
            <Text style={styles.text}>{i + 1}</Text>
          </View>
          <View style={styles.containerNama}>
            <Text style={styles.textNama}>{el}</Text>
          </View>
        </View>
      ))}
    </>
  );
}
