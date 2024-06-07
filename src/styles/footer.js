import {StyleSheet} from 'react-native';
import {cssVar} from './cssVariable.js';

export const styles = StyleSheet.create({
  text: {
    color: cssVar.colors.purple,
    textAlign: 'center',
    paddingVertical: 10,
  },
  footerContainer: {
    backgroundColor: cssVar.colors.orange,
  },
  image: {
    width: 250,
    height: 250,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    color: cssVar.colors.white,
    fontFamily: cssVar.fonts.shd,
    fontSize: 30,
  },
  textTag: {
    color: cssVar.colors.white,
    fontFamily: cssVar.fonts.shd,
    fontSize: 18,
    marginVertical: 4,
  },
  textInformation: {
    color: cssVar.colors.white,
    fontSize: 15,
    textDecorationLine: 'underline',
    marginVertical: 4,
  },
});
