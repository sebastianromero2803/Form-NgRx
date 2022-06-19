import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResidentialState } from "../models/residential.model";

export const residentialSelector =
  createFeatureSelector<ResidentialState>("storeResidential");

export const getPersonalInfo = createSelector(
  residentialSelector,
  (state: ResidentialState) => [state.direction, state.neighborhood, state.department, state.city]
);