import {StyleSheet} from 'react-native';
import {cssVar} from './cssVariable.js';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    borderColor: cssVar.colors.white,
    borderWidth: 1,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 15,
  },
  Text: {
    color: cssVar.colors.white,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: cssVar.fonts.shd,
    paddingVertical: 5,
  },
  containerImage: {
    width: '90%',
  },
});
