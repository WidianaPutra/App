import {Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles/detail.js';
import {f1, f2, f3, f4, f5, f6, f7, f8} from '../assets/images/index.js';
import {dataFoto} from '../data/foto.js';
import Gallery from '../components/Gallery.jsx';

export default function DetailScreen({navigation, route}) {
  const {data} = route.params;
  console.log(data.deskripsi);
  return (
    <View style={styles.containerScreen}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Kembali</Text>
        </TouchableOpacity>
        <Image source={data.foto} style={styles.image} />
        <Text style={styles.deskripsi}>Deskripsi: {data.des}</Text>
      </View>
      <Gallery
        navigation={navigation}
        title={`Foto lainnya`}
        styleType={false}
      />
    </View>
  );
}
