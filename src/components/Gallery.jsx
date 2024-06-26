import {ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from '../styles/gallery.js';
import {f1, f2, f3, f4, f5, f6, f7, f8} from '../assets/images/index.js';

const dataFoto = [
  {
    foto: f1,
    deskripsi:
      'Foto ini diambil pada hari ke-4 MPLS (Masa Pengenalan Lingkungan Sekolah) Siswa/i SMK Wira Harapan tahun ajaran 2023-2024',
  },
  {
    foto: f2,
    deskripsi:
      'Foto ini diambil pada hari Selasa saat melakukan Test Psikologi',
  },
  {
    foto: f3,
    deskripsi: 'Foto ini diambil saat melaksanakan projek P5 pertama',
  },
  {
    foto: f4,
    deskripsi:
      'Foto ini diambil pada hari terakhir saat melaksanakan projek P5 pertama',
  },
  {
    foto: f5,
    deskripsi:
      'Foto ini diambil pada hari ke-4 MPLS (Masa Pengenalan Lingkungan Sekolah) Siswa/i SMK Wira Harapan tahun ajaran 2023-2024',
  },
  {
    foto: f6,
    deskripsi:
      'Foto ini diambil pada hari selasa pada matapelajaran Bahasa Mandarin sebagai kenangkenangan bersama Guru (Laushi) yang mengajar, karna Guru (Laoshi) akan pidah tempat mengajar',
  },
  {
    foto: f7,
    deskripsi:
      'Foto ini diambil pada hari selasa pada matapelajaran Bahasa Mandarin sebagai kenangkenangan bersama Guru (Laoshi) yang mengajar, karna Guru (Laoshi) akan pidah tempat mengajar',
  },
  {
    foto: f8,
    deskripsi: 'Foto ini diambil pada hari Guru pada tanggal 25 November 2023',
  },
];

export default function Gallery({navigation, title, styleType}) {
  return (
    <>
      <Text style={styles.Text}>{title}</Text>
      <ScrollView horizontal style={styles.container}>
        {dataFoto.map((el, i) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('detail', {
                data: {foto: el.foto, des: el.deskripsi},
              })
            }>
            <Image source={el.foto} style={styles.image} key={i} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
