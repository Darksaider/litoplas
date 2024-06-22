import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FeedbackFormState {
    userName: string;
    userEmail: string;
    userPhone: string;
    userThemeMassage: string;
    userMassage: string;
    userThemeRequest: string;
}

 const initialState: FeedbackFormState = {
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
        setValuesFeedbackForm: (state, action: PayloadAction<{ name: keyof FeedbackFormState; value: string }>) => {
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
