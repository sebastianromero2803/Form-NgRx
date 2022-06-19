import { PersonalState } from '../models/personal.model';
import { storePersonal } from '@app-core/store/actions/personal.action';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: PersonalState = {
    name: '',
    lastName: '',
    age: 0,
    email: '',
    phone: ''
};

const _personalReducer = createReducer(
  initialState,
  on(storePersonal, (state, { storePayload }) => ({
    ...state,
    name: storePayload.name,
    lastName: storePayload.lastName,
    age: storePayload.age,
    email: storePayload.email,
    phone: storePayload.phone
  }))
);

export function personalReducer(state: PersonalState | undefined, action: Action) {
  return _personalReducer(state, action);
}
