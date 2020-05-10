import * as MyTypes from 'MyTypes';
import { actionTypes } from '_constants';

interface ResponeState {
  message: string;
  type: string;
}

export const initialState: ResponeState = {
  message: '',
  type: ''
};

export const responseReducer = (state: ResponeState = initialState, action: MyTypes.RootAction) => {
  switch (action.type) {
    case actionTypes.SET_RESPONSE_MESSAGE:
      const { message, type } = action.payload;
      return { message, type };

    default:
      return state;
  }
};
