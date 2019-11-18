import {
  GuessWordAction,
  CorrectGuessAction,
  FetchSecretWordAction,
  IGuessWordPayload
} from './actions';

export enum ActionTypes {
  correctGuess,
  guessedWord,
  secretWord
}

export interface IActionStates {
  guessedWord: IGuessWordPayload;
  secretWord: string;
  correctGuess: boolean;
}

export type Action =
  | FetchSecretWordAction
  | GuessWordAction
  | CorrectGuessAction;
