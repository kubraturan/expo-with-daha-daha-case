import * as api from '@api/index';
import GoBack from '@assetSVG/back.svg';
import DaysBadge from '@components/Carousel/DaysBadge';
import Icon from '@components/Carousel/Icon';
import SvgComponent from '@components/SvgComponent';
import colors from '@constants/colors';
import { IPromotionItem } from '@constants/types';
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import RenderHtml, { MixedStyleDeclaration } from 'react-native-render-html';

const width = Dimensions.get('window').width;

export default function PromotionDetails() {
  const navigation = useNavigation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { seoName, id } = useLocalSearchParams();

  const [promotion, setPromotion] = useState<IPromotionItem>();

  async function getPromotion() {
    try {
      const response = await api.getPromotion(Number(id));

      setPromotion(response.data);
    } catch (err) {
      Alert.alert("Couldn't fetch promotionsList", (err as Error).message);
    }
  }

  useEffect(() => {
    getPromotion();
  }, []);

  if (!promotion) return <Text>Promotion not found</Text>;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageBadgeContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: promotion.ImageUrl }}
              resizeMode="cover"
              style={styles.image}
            />
          </View>

          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.goBackBtn}>
              <SvgComponent svg={GoBack} />
            </View>
          </TouchableWithoutFeedback>

          <Icon
            backgroundColor={promotion.BrandIconColor}
            url={promotion.BrandIconUrl}
          />
          <DaysBadge date={promotion.RemainingText} />
        </View>

        <View style={styles.textContentContainer}>
          <RenderHtml
            source={{ html: promotion.Title }}
            contentWidth={width - 32}
            tagsStyles={titleTagStyles}
          />

          <RenderHtml
            source={{ html: promotion.Description }}
            contentWidth={width - 32}
            tagsStyles={descriptionTagStyles}
          />
        </View>
      </ScrollView>

      <LinearGradient
        colors={['rgba(255,255,255,0)', colors.white]}
        style={styles.bottomBtnGradient}>
        <View style={styles.bottomBtnContainer}>
          <Text style={styles.bottomBtnTitle}>
            {promotion.DetailButtonText}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: 'relative', flex: 1 },
  scrollViewContainer: { flex: 1 },
  scrollViewContent: { paddingBottom: 96 },
  imageBadgeContainer: {
    borderRadius: 16,
    position: 'relative',
  },
  imageContainer: {
    overflow: 'hidden',
    borderBottomLeftRadius: 96,
  },
  image: {
    aspectRatio: 750 / 628,
    top: 0,
  },
  goBackBtn: {
    position: 'absolute',
    top: 56,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  textContentContainer: { marginHorizontal: 16 },
  bottomBtnGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 130,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomBtnContainer: {
    width: width - 32,
    backgroundColor: colors.red,
    padding: 18,
    borderRadius: 28,
    marginBottom: 20,
  },
  bottomBtnTitle: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
});

const titleTagStyles = {
  p: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'left',
    color: colors.gray,
  },
} as Readonly<Record<string, MixedStyleDeclaration>>;

const descriptionTagStyles = {
  p: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'left',
    color: colors.gray,
  },
} as Readonly<Record<string, MixedStyleDeclaration>>;
