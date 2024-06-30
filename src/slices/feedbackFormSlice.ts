import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {IFeedbackFormFields} from "../components/intergeces.ts";

 const initialState: IFeedbackFormFields = {
    userName: '',
    userEmail: '',
    userPhone: '',
    userThemeMassage: '',
    userMassage: '',
    userThemeRequest: '',
};

export const feedbackFormSlice = createSlice({
    name: 'FeedbackForm',
    initialState,
    reducers: {
        setValuesFeedbackForm: (state, action: PayloadAction<{ name: keyof IFeedbackFormFields; value: string }>) => {
            const { name, value } = action.payload;
            state[name] = value;
        },

        resetFeedbackState: () => {
          return initialState
        },
    },
})

export const { setValuesFeedbackForm, resetFeedbackState } = feedbackFormSlice.actions;
export default feedbackFormSlice.reducer;
