import getLocalStorage from './helper/getLocalStorage.js';

// Constantes Redux
const TOKEN_FETCH_STARTED = 'token/FETCH_STARTED';
const TOKEN_FETCH_SUCCESS = 'token/FETCH_SUCCESS';
const TOKEN_FETCH_ERROR = 'token/FETCH_ERROR';

// Function Constructer
const tokenFetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
const tokenFetchsuccess = (payload) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload,
  localStorage: 'token',
});
const tokenFetchError = (payload) => ({
  type: TOKEN_FETCH_ERROR,
  payload,
});

export const tokenFetch = (user) => async (dispatch) => {
  try {
    dispatch(tokenFetchStarted());

    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );
    const { token } = await response.json();
    dispatch(tokenFetchsuccess(token));
  } catch (error) {
    dispatch(tokenFetchError(error.message));
  }
};

const initialState = {
  loading: false,
  data: getLocalStorage('token', null),
  error: null,
};

function reducerToken(state = initialState, action) {
  switch (action.type) {
    case TOKEN_FETCH_STARTED:
      return { ...state, loading: true };
    case TOKEN_FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: false };
    case TOKEN_FETCH_ERROR:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

export default reducerToken;
