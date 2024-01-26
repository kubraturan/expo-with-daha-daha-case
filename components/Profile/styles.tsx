import colors from '@constants/colors';
import { StyleSheet, ViewStyle } from 'react-native';

interface DefaultContainerStyles {
  headerContainer: ViewStyle;
  profileContainer: ViewStyle;
  profileIcon: ViewStyle;
  overlay: ViewStyle;
  circle: ViewStyle;
}

const defaultContainerStyle: DefaultContainerStyles = StyleSheet.create({
  headerContainer: {
    marginTop: 80,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  profileIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 12,
    height: 12,
  },
  circle: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.greenLight,
    borderRadius: 50,
  },
});

export default defaultContainerStyle;
