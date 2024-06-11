import {StyleSheet} from 'react-native';
import {cssVar} from './cssVariable.js';

export const styles = StyleSheet.create({
  containerScreen: {
    backgroundColor: cssVar.colors.black,
    // width: '100%',
    height: '100%',
  },
  backButton: {
    color: cssVar.colors.black,
    fontFamily: cssVar.fonts.robotoBold,
    color: cssVar.colors.white,
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 2,
    width: 'auto',
  },
  image: {
    width: 380,
    borderRadius: 15,
    borderColor: cssVar.colors.white,
    borderWidth: 1,
    height: 200,
    marginHorizontal: 10,
  },
  deskripsi: {
    color: cssVar.colors.white,
    marginLeft: 10,
    marginTop: 15,
    fontSize: 15,
    fontFamily: cssVar.fonts.robotoThin,
    marginBottom: 50,
  },
});
