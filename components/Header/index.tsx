import Logo from '@assetSVG/logo.svg';
import Profile from '@components/Profile';
import SvgComponent from '@components/SvgComponent';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <SvgComponent svg={Logo} />
      <Profile />
    </View>
  );
}
