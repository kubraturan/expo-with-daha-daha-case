import { ITag } from '@constants/types';
import { RootState } from '@redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IInitialState = {
  activeTag: ITag | null;
};

const initialState: IInitialState = { activeTag: null };

const promotionTagSlice = createSlice({
  name: 'promotionTags',
  initialState,
  reducers: {
    changeActiveTag: (state, action: PayloadAction<ITag | null>) => {
      if (!action.payload || state.activeTag?.Id === action.payload.Id) {
        state.activeTag = null;
      } else {
        state.activeTag = action.payload;
      }
    },
  },
});

export const promotionsSliceActions = promotionTagSlice.actions;
export const promotionsSliceReducer = promotionTagSlice.reducer;

export const selectActiveTag = (state: RootState) =>
  state.promotionTags.activeTag;
