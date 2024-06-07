import {View, Text, Image} from 'react-native';
import {styles} from '../styles/splashScreen';
import {useEffect, useState} from 'react';

const SplashScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState('. ');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('home');
    }, 2000);
  }, [navigation]);

  setTimeout(() => {
    setIsLoading(`${isLoading}. `);
  }, 700);

  return (
    <View style={styles.contaner}>
      <View>
        <Image
          source={require('../assets/images/logo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.text}>Expors</Text>
      </View>
      <Text style={styles.loading}>Loading {isLoading}</Text>
    </View>
  );
};

export default SplashScreen;
