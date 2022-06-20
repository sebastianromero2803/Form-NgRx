import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ResidentialState } from "../models/residential.model";

export const residentialSelector =
  createFeatureSelector<ResidentialState>("storeResidential");

export const getResidentialInfo = createSelector(
  residentialSelector,
  (state: ResidentialState) => {
    return {direction: state.direction, neighborhood: state.neighborhood, department: state.department, city: state.city} as ResidentialState;
  }
);