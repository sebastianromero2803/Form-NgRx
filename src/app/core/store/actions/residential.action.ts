import { createAction, props } from "@ngrx/store";
import { ResidentialState } from '../models/residential.model';

export const storeResidential = createAction(
  "[Store Residential] Store residential information",
  props<{ storePayload: ResidentialState }>()
);