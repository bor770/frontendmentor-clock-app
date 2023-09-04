import { createReducer, on } from '@ngrx/store';

import { Quote } from '../quote.model';
import * as QuoteActions from './quote.actions';

export type State = Quote;

const initialState: State = null;

export const quoteReducer = createReducer(
  initialState,
  on(QuoteActions.set, (state, { quote }): State => ({ ...state, ...quote }))
);

export const getAuthor = (state: State) => state?.author;
export const getContent = (state: State) => state?.content;
