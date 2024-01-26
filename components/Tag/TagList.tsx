import TagItem from '@components/Tag/TagItem';
import { ITag } from '@constants/types';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  promotionsSliceActions,
  selectActiveTag,
} from '@redux/slices/promotionTag';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

type Props = {
  tags: ITag[];
};

export default function QuestionList(props: Props) {
  const dispatch = useAppDispatch();
  const activeTag = useAppSelector(selectActiveTag);

  const listItemkeyExtractor = (item: ITag, index: number) =>
    `${item.Id}-${index}`;

  const renderQuestionItem = ({
    item,
    index,
  }: {
    item: ITag;
    index: number;
  }) => (
    <TagItem
      item={item}
      index={index}
      active={activeTag?.Id === item.Id}
      onPress={() => handleTagButtonPress(item)}
    />
  );

  const handleTagButtonPress = (tag?: ITag) => {
    dispatch(promotionsSliceActions.changeActiveTag(tag || null));
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
      horizontal
      data={props.tags}
      renderItem={renderQuestionItem}
      keyExtractor={listItemkeyExtractor}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
    marginLeft: -24,
    marginRight: -24,
  },
  content: {
    paddingHorizontal: 24,
    marginRight: 15,
  },
});
