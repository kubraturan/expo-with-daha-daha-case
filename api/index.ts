import { getMethod } from './axios';
import {
  TagsResponse,
  IPromotionItem,
  PromotionListResponse,
} from '../constants/types';

export async function getTagList() {
  return await getMethod<TagsResponse>('/tags/list');
}

export async function getPromotion(promotionId: number) {
  return await getMethod<IPromotionItem>(`/promotions?Id=${promotionId}`);
}

export async function getPromotionList(tagId?: number) {
  const params = {
    Channel: 'PWA',
    ...(tagId && { TagId: tagId }),
  };
  return await getMethod<PromotionListResponse>('/promotions/list', params);
}
