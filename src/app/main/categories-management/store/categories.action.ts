import { createAction, props } from '@ngrx/store';

export const updateJointVentureSuccess = createAction(
  '[BiboJointVenture/API] Update bibo joint venture Success',
  props<{ response: any}>()
);

export const updateJointVentureFailure = createAction(
  '[BiboJointVenture/API] Update bibo joint venture Failure',
  props<{ errors: any }>()
);
