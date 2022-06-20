import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonalState } from "../models/personal.model";

export const personalSelector =
  createFeatureSelector<PersonalState>("storePersonal");

export const getPersonalInfo = createSelector(
  personalSelector,
  (state: PersonalState) => {
    return {name: state.name, lastName: state.lastName, email: state.email, age: state.age, phone: state.phone} as PersonalState;
  }
);