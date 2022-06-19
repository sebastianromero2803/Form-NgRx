import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonalState } from "../models/personal.model";

export const personalSelector =
  createFeatureSelector<PersonalState>("storePersonal");

export const getPersonalInfo = createSelector(
  personalSelector,
  (state: PersonalState) => [state.name, state.lastName, state.email, state.age, state.phone]
);