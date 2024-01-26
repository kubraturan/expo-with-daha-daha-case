import colors from '@constants/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RenderHtml, { MixedStyleDeclaration } from 'react-native-render-html';

type IProps = {
  html: string;
};

export default function Title({ html }: IProps) {
  return (
    <View style={styles.container}>
      <RenderHtml
        source={{ html }}
        contentWidth={250}
        tagsStyles={tagsStyles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
});

const tagsStyles = {
  p: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
    color: colors.gray,
  },
} as Readonly<Record<string, MixedStyleDeclaration>>;
