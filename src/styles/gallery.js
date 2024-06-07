import {StyleSheet} from 'react-native';
import {cssVar} from './cssVariable.js';

export const styles = StyleSheet.create({
  image: {
    width: 380,
    borderRadius: 15,
    borderColor: cssVar.colors.white,
    borderWidth: 1,
    height: 200,
    marginHorizontal: 10,
  },
  container: {
    width: '100%',
    paddingVertical: 5,
  },
  Text: {
    color: cssVar.colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: cssVar.fonts.shd,
    paddingVertical: 5,
  },
});
