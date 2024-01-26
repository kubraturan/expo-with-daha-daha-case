import CardShadow from '@components/Carousel/CardBottomBox';
import DaysBadge from '@components/Carousel/DaysBadge';
import Icon from '@components/Carousel/Icon';
import CarouselImage from '@components/Carousel/Image';
import Title from '@components/Carousel/Title';
import colors from '@constants/colors';
import { IPromotionItem } from '@constants/types';
import { router } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import RenderHtml from 'react-native-render-html';

const width = Dimensions.get('window').width;
const borderRadius = 16;

const tagsStyles = {
  p: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
};

type IProps = {
  promotion: IPromotionItem;
};

export default function Card({ promotion }: IProps) {
  const handleNavigatePromotionDetails = (seoName: string, id: number) => {
    router.push(`/campaign/${seoName}/${id}`);
  };

  return (
    <View style={styles.shadowContainer}>
      <View style={styles.shadow}>
        <CardShadow width={width} color={promotion.PromotionCardColor} />
      </View>

      <TouchableWithoutFeedback
        onPress={() =>
          handleNavigatePromotionDetails(promotion.SeoName, promotion.Id)
        }>
        <View key={promotion.Id} style={styles.container}>
          <View style={styles.imageContainer}>
            <CarouselImage url={promotion.ImageUrl} />
            <Icon
              backgroundColor={promotion.BrandIconColor}
              url={promotion.BrandIconUrl}
            />
            <DaysBadge date={promotion.RemainingText} />
          </View>

          <Title html={promotion.Title} />
          <RenderHtml
            source={{ html: promotion.ListButtonText }}
            contentWidth={100}
            tagsStyles={tagsStyles}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    marginTop: -width * 0.08,
    position: 'relative',
  },
  shadow: {
    position: 'absolute',
    bottom: -borderRadius,
    height: borderRadius * 2,
  },
  container: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius,
    paddingBottom: 4,
  },
  imageContainer: {
    margin: 4,
    borderRadius,
    position: 'relative',
  },
});
