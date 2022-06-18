import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "@app-core/store/models/app.model";
import { personalReducer } from "./reducers/personal.reducer";
import { residentialReducer } from "./reducers/residential.reducer";

export const reducers: ActionReducerMap<AppState> = {
  storePersonal: personalReducer,
  storeResidential: residentialReducer,
};
