import {compose, createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

export const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(ReduxThunk)),
);