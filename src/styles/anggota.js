import {StyleSheet} from 'react-native';
import {cssVar} from './cssVariable.js';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerAbsen: {
    width: '10%',
  },
  containerNama: {
    width: '90%',
    borderLeftWidth: 1,
    borderColor: 'white',
    padding: 2,
  },
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    color: cssVar.colors.white,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: cssVar.fonts.robotoBold,
  },
  textTitle: {
    color: cssVar.colors.white,
    fontSize: 30,
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: cssVar.fonts.robotoBold,
  },
  textNama: {
    color: cssVar.colors.white,
    fontSize: 15,
    paddingHorizontal: 5,
    fontFamily: cssVar.fonts.robotoBold,
  },
});
