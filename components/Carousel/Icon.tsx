import colors from '@constants/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type IProps = {
  url: string;
  backgroundColor?: string;
};

export default function Icon({ url, backgroundColor }: IProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
}

const size = 55;
const styles = StyleSheet.create({
  container: {
    width: size,
    height: size,
    position: 'absolute',
    bottom: -5,
    left: 0,
    borderRadius: size / 2,
    borderWidth: 5,
    borderColor: colors.white,
  },
  image: {
    aspectRatio: 1,
  },
});
