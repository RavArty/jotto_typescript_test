import { combineReducers } from 'redux';

import { guessReducer } from './reducer';

const rootReducer = combineReducers({
  guessWord: guessReducer
});

export default rootReducer;
