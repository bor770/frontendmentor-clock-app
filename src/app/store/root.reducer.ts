import { ActionReducerMap } from '@ngrx/store';

import * as fromJoke from '../joke/store/joke.reducer';
import * as fromLayout from '../shared/layout/store/layout.reducer';
import * as fromTime from '../main/time/store/time.reducer';
import * as fromTimeData from '../shared/time-data/store/time-data.reducer';
import * as fromUi from '../shared/ui/store/ui.reducer';

interface RootState {
  joke: fromJoke.State;
  layout: fromLayout.State;
  time: fromTime.State;
  timeData: fromTimeData.State;
  ui: fromUi.State;
}

export const rootReducer: ActionReducerMap<RootState> = {
  joke: fromJoke.reducer,
  layout: fromLayout.reducer,
  time: fromTime.reducer,
  timeData: fromTimeData.reducer,
  ui: fromUi.reducer,
};
