import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import memoryGameReducer from './reducers/memoryGameReducer';

const store = createStore(memoryGameReducer, composeWithDevTools());

export default store;

