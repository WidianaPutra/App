import Anggota from './src/components/anggota';
import Footer from './src/components/footer';
import Gallery from './src/components/Gallery';
import Home from './src/components/home';
import {ScrollView} from 'react-native';

export default function App() {
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
