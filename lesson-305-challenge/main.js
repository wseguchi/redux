import store from './store/configureStore.js';
import { tokenFetch } from './store/reducerToken.js';
import { userFetch } from './store/reducerUser.js';

async function login(user) {
  let state = store.getState();
  if (state.reducerToken.data === null) {
    await store.dispatch(tokenFetch(user));
    state = store.getState();
  }
  await store.dispatch(userFetch(state.reducerToken.data));
}

login({ username: 'dog', password: 'dog' });
