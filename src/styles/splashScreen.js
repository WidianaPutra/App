import {StyleSheet} from 'react-native';
import {cssVar} from './cssVariable.js';

export const styles = StyleSheet.create({
  contaner: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: cssVar.colors.black,
  },

  logo: {
    width: 300,
    height: 300,
  },
  text: {
    color: cssVar.colors.white,
    textAlign: 'center',
    fontSize: 40,
    top: -80,
    fontFamily: cssVar.fonts.shd,
  },
  loading: {
    color: cssVar.colors.white,
    textAlign: 'center',
    fontSize: 20,
    bottom: -0,
    fontFamily: cssVar.fonts.shd,
  },
});
