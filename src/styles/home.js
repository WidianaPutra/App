import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get(`window`);
import {cssVar} from './cssVariable';

export const homeStyles = StyleSheet.create({
  LinearG: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    opacity: 0.8,
  },
  backgroundImg: {
    flex: 1,
    width: '100%',
    height: height,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTitleText: {
    color: cssVar.colors.white,
    fontFamily: cssVar.fonts.shd,
    fontSize: 50,
  },
  homeText: {
    fontSize: 20,
    fontFamily: cssVar.fonts.shd,
    color: cssVar.colors.white,
  },
  homeButton: {
    backgroundColor: cssVar.colors.green,
    color: cssVar.colors.white,
    fontSize: 18,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
