import colors from '@constants/colors';
import { ITag } from '@constants/types';
import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  item: ITag;
  index: number;
  active: boolean;
  onPress: () => void;
};

export default function TagItem(props: Props) {
  const { item, index, active, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderColor: active ? colors.red : colors.gray,
          marginLeft: index > 0 ? 10 : 0,
        },
      ]}>
      <Image
        source={{
          uri: item.IconUrl,
        }}
        borderRadius={6}
        style={[styles.image]}
      />
      <View style={[styles.title]}>
        <Text
          style={{
            color: colors.black,
          }}>
          {item.Name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#ECEEEF',
    borderWidth: 1,
    borderRadius: 10,
    height: 36,
  },
  title: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    bottom: 0,
  },
  image: {
    top: 6,
    left: 6,
    width: 24,
    height: 24,
  },
});
