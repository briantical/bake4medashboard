declare module 'MyTypes' {
  import { StateType, ActionType } from 'typesafe-actions';

  export type RootAction = ActionType<typeof import('actions')>;
  export type ReducerState = StateType<typeof import('reducers').default>;
}
