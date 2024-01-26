import * as api from '@api/index';
import PromotionsList from '@components/Carousel/PromotionsList';
import Header from '@components/Header';
import TagList from '@components/Tag/TagList';
import { IPromotionItem, ITag } from '@constants/types';
import { useAppSelector } from '@redux/hooks';
import { selectActiveTag } from '@redux/slices/promotionTag';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

export default function DiscoverScreen() {
  const [promotionsList, setPromotionsList] = useState<IPromotionItem[]>([]);
  const [tagList, setTagList] = useState<ITag[]>([]);
  const activeTag = useAppSelector(selectActiveTag);

  async function getPromotionsList() {
    try {
      const response = await api.getPromotionList(activeTag?.Id);
      setPromotionsList(response.data);
    } catch (err) {
      Alert.alert("Couldn't fetch promotionsList", (err as Error).message);
    }
  }

  async function getTagList() {
    try {
      const response = await api.getTagList();

      setTagList(response.data);
    } catch (err) {
      Alert.alert("Couldn't fetch tagList", (err as Error).message);
    }
  }

  useEffect(() => {
    getTagList();
    getPromotionsList();
  }, []);

  useEffect(() => {
    getPromotionsList();
  }, [activeTag]);

  const tags = tagList.sort((a, b) => a.Rank - b.Rank);

  return (
    <View style={styles.container}>
      <Header />
      <TagList tags={tags} />
      <PromotionsList promotions={promotionsList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    display:"flex",
  },
});
