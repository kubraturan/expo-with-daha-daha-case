import Card from '@components/Carousel/Card';
import Progress from '@components/Carousel/Swiper';
import { IPromotionItem } from '@constants/types';
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

type IProps = {
  promotions?: IPromotionItem[];
};

export default function PromotionsList({ promotions = [] }: IProps) {
  const carouselProgress = useSharedValue(0);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  if (promotions.length === 0) return null;

  return (
    <View style={{height }}>
      <Carousel
        width={width}
        height={width * 1.4}
        pagingEnabled
        snapEnabled
        loop={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.8,
          parallaxScrollingOffset: width * 0.25,
        }}
        onProgressChange={(_, absoluteValue) => {
          carouselProgress.value = absoluteValue;
        }}
        data={promotions}
        renderItem={({ item: promotion }) => <Card promotion={promotion} />}
      />
      <View style={styles.progressContainer}>
        {promotions.map((p, index) => (
          <Progress
            key={p.Id}
            backgroundColor={promotions[index].PromotionCardColor}
            animValue={carouselProgress}
            index={index}
            length={promotions.length}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
