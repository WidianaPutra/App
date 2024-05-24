import {ScrollView, View, Text, Linking, ImageBackground} from 'react-native';
import {homeStyles} from '../styles/home.js';
import LinearGradient from 'react-native-linear-gradient';
import Gallery from './Gallery.jsx';

export default function Home() {
  return (
    <>
      <ImageBackground
        source={require(`../assets/images/1.jpg`)}
        resizeMode="cover"
        style={homeStyles.backgroundImg}>
        <LinearGradient
          colors={['rgba(0,0,0, .6)', 'rgba(0,0,0,.9)']}
          style={homeStyles.LinearG}></LinearGradient>
        <View style={homeStyles.homeContainer}>
          <Text style={homeStyles.homeTitleText}>Expors</Text>
          <Text style={homeStyles.homeText}>
            ( Executive People of RPL Satu )
          </Text>
          <Text
            style={homeStyles.homeButton}
            onPress={() =>
              Linking.openURL(
                'https://instagram.com/expors.ofc?igshid=MzRlODBiNWFlZA==',
              )
            }>
            More Information
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}
