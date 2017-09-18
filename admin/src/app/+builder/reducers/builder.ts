import * as builder from '../actions';
import * as Model from '../models';


export interface State {
  builder: Model.Builder
}

export const initialState: State = {
  builder: {
    active: false
  }
};

export function reducer(state: State = initialState, action: builder.Actions) {
  switch(action.type){
    case builder.BUILD_CLIENT: {
      return {
        ...state,
        active: true
      };

    }
    default: {
      return state;
    }
  }
}
