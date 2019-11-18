import rootReducer from '../redux/root-reducer';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../redux/store';

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};
// export const storeFactory = initialState => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(
//     createStore
//   );
//   return createStoreWithMiddleware(rootReducer, initialState);
// };

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
