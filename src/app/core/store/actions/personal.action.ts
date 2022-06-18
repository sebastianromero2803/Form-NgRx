import { createAction, props } from "@ngrx/store";
import { PersonalState } from '../models/personal.model';

export const storePersonal = createAction(
  "[Store Personal] Store personal information",
  props<{ storePayload: PersonalState }>()
);