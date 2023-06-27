import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js';
import reducerToken from './reducerToken.js';
import reducerUser from './reducerUser.js';

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = Redux.combineReducers({ reducerToken, reducerUser });
const store = Redux.createStore(reducer, enhancer);

export default store;
