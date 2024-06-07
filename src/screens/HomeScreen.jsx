import Anggota from '../components/anggota';
import Footer from '../components/footer';
import Gallery from '../components/Gallery';
import Home from '../components/home';
import {ScrollView} from 'react-native';

export default function HomeScreen() {
  const randomImage = Math.floor(Math.random() * 8);
  return (
    <>
      <ScrollView style={{backgroundColor: 'black'}}>
        <Home />
        <Gallery />
        <Anggota />
        <Footer />
      </ScrollView>
    </>
  );
}
