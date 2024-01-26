import ProfileIcon from '@assetSVG/profile.svg';
import SvgComponent from '@components/SvgComponent';
import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import styles from './styles';

type Props = {
  isActiveAuth: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function Profile(props: Props) {
  const { isActiveAuth, style } = props;

  function onPress() {
    console.log('profile de ne yapılmasını istiyorsak');
  }
  return (
    <View style={styles.profileContainer}>
      <TouchableOpacity style={[styles.profileIcon, style]} onPress={onPress}>
        <SvgComponent svg={ProfileIcon} />
        {isActiveAuth && (
          <View style={styles.overlay}>
            <View style={styles.circle} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

Profile.defaultProps = {
  style: {},
  isActiveAuth: true,
};
