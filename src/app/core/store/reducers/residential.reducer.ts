import { Action, createReducer, on } from "@ngrx/store";
import { ResidentialState } from "../models/residential.model";
import { storeResidential } from '../actions/residential.action';

const initialState: ResidentialState = {
    direction: '',
    neighborhood: '',
    department: '',
    city: ''
};

const _residentialReducer = createReducer(
  initialState,
  on(storeResidential, (state, { storePayload }) => ({
    ...state,
    direction: storePayload.direction,
    neighborhood: storePayload.neighborhood,
    department: storePayload.department,
    city: storePayload.city
  }))
);

export function residentialReducer(state: ResidentialState, action: Action) {
  return _residentialReducer(state, action);
}