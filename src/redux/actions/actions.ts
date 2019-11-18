import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes, IActionStates, Action } from './types';
import { getLetterMatchCount } from '../../helpers/helpers';

export interface FetchSecretWordAction {
  type: ActionTypes.secretWord;
  payload: string;
}
export interface IGuessWordPayload {
  guessedWord: string;
  letterMatchCount: number;
}
export interface GuessWordAction {
  type: ActionTypes.guessedWord;
  payload: IGuessWordPayload;
}

export interface CorrectGuessAction {
  type: ActionTypes.correctGuess;
}

export const guessWord = (guessedWord: string) => {
  return function(dispatch: Dispatch, getState: any) {
    const secretWord: string = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: ActionTypes.guessedWord,
      payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
      dispatch({ type: ActionTypes.correctGuess });
    }
  };
};

export const getSecretWord = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get('http://localhost:3030');
    dispatch<FetchSecretWordAction>({
      type: ActionTypes.secretWord,
      payload: response.data
    });
  };
};
