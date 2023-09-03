import { createAction, props } from '@ngrx/store';

import { TimeData } from '../time-data.model';

export const setData = createAction(
  `[Time Data] Set Data`,
  props<{ data: TimeData }>()
);
