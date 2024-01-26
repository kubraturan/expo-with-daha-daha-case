import * as React from 'react';
import { Image, StyleProp, ViewStyle, ImageSourcePropType } from 'react-native';
import { SvgUri } from 'react-native-svg';

type SvgComponentProps = {
  svg: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
};

export default function SvgComponent(props: SvgComponentProps) {
  const { uri, width, height } = Image.resolveAssetSource(props.svg);
  return <SvgUri width={width} height={height} style={props.style} uri={uri} />;
}

SvgComponent.defaultProps = {
  svg: '',
  style: {},
};
