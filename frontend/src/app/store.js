import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../features/UserQuote/UserQuoteSlice';

export const store = configureStore({
  reducer: {
    'quote':quoteReducer
  },
});
