import { Action } from '@ngrx/store';

export const BUILD_CLIENT = '[Builder] BuildClient';


export class BuildClient implements Action {
  readonly type = BUILD_CLIENT;
}


export type Actions
  = BuildClient;
