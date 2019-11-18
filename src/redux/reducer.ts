import { Action, ActionTypes, IActionStates } from './actions/types';

const GUESSED_WORD_INIT_STATE = {
  guessedWord: '',
  letterMatchCount: 0
};
export const INITIAL_STATE = {
  guessedWord: GUESSED_WORD_INIT_STATE,
  secretWord: '',
  correctGuess: false
};
export const guessReducer = (
  state: IActionStates = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.correctGuess:
      return {
        ...state,
        correctGuess: true
      };
    case ActionTypes.guessedWord:
      return {
        ...state,
        guessedWord: action.payload
      };
    case ActionTypes.secretWord:
      return {
        ...state,
        secretWord: action.payload
      };
    default:
      return state;
  }
};
