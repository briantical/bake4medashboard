import { action } from 'typesafe-actions';
import { actionTypes } from '_constants';

// Axios reponses for both failure and success
export const responseActions = {
  setErrorMessage: (message: string, type: string) => action(actionTypes.SET_RESPONSE_MESSAGE, { message, type })
};
