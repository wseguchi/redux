import reducerAluno from './reducerAluno.js';
import reducerAulas from './reducerAulas.js';

const reducer = Redux.combineReducers({ reducerAluno, reducerAulas });
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
