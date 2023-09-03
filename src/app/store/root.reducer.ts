import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromQuote from '../quote/store/quote.reducer';
import * as fromTime from '../time/store/time.reducer';

interface State {
  layout: fromLayout.State;
  quote: fromQuote.State;
  time: fromTime.State;
}

export const appReducer: ActionReducerMap<State> = {
  layout: fromLayout.layoutReducer,
  quote: fromQuote.quoteReducer,
  time: fromTime.timeReducer,
};

const selectLayoutState = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayoutState,
  fromLayout.getWidth
);

const selectQuoteState = createFeatureSelector<fromQuote.State>(`quote`);

export const selectQuoteAuthor = createSelector(
  selectQuoteState,
  fromQuote.getAuthor
);
export const selectQuoteContent = createSelector(
  selectQuoteState,
  fromQuote.getContent
);

const selectTimeState = createFeatureSelector<fromTime.State>(`time`);

export const selectTimeLocation = createSelector(
  selectTimeState,
  fromTime.getLocation
);