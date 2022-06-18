import { PersonalState } from "./personal.model";
import { ResidentialState } from "./residential.model";

export interface AppState {
  storePersonal: PersonalState;
  storeResidential: ResidentialState;
}
