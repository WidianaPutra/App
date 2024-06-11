import Anggota from '../components/anggota';
import Footer from '../components/footer';
import Gallery from '../components/Gallery';
import Home from '../components/home';
import {ScrollView} from 'react-native';

export default function HomeScreen({navigation}) {
  const randomImage = Math.floor(Math.random() * 8);
  console.log(navigation);
  return (
    <>
      <ScrollView style={{backgroundColor: 'black'}}>
        <Home />
        <Gallery navigation={navigation} title={`Galery`} styleType={true} />
        <Anggota />
        <Footer />
      </ScrollView>
    </>
  );
}
