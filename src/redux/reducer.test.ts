import { ActionTypes, IActionStates } from './actions/types';
import { INITIAL_STATE, guessReducer } from './reducer';

// test('returns default initial state of `false` when no action is passed', () => {
//   const newState = guessReducer(undefined, {});
//   expect(newState).toEqual(INITIAL_STATE);
// });

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  const newState = guessReducer(undefined, { type: ActionTypes.correctGuess })
    .correctGuess;
  expect(newState).toBe(true);
});

test('returns state of guessedWord upon receiving an action of type `GUESSED_WORD`', () => {
  const mockItems = { guessedWord: 'train', letterMatchCount: 0 };
  const newState = guessReducer(undefined, {
    type: ActionTypes.guessedWord,
    payload: mockItems
  });
  expect(newState).toEqual({
    ...INITIAL_STATE,
    guessedWord: { guessedWord: 'train', letterMatchCount: 0 }
  });
});
