import { createStore } from 'redux';

// Root Reducer.
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

export default store;