import { createAction, props } from '@ngrx/store';

import { Location } from '../location.model';

export const setLocation = createAction(
  `[Time] Set Location`,
  props<{ location: Location }>()
);
