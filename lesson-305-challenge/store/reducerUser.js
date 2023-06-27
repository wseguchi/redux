// Constantes Redux
const USER_FETCH_STARTED = 'user/FETCH_STARTED';
const USER_FETCH_SUCCESS = 'user/FETCH_SUCCESS';
const USER_FETCH_ERROR = 'user/FETCH_ERROR';

// Function Constructer
export const userFetchStarted = () => ({ type: USER_FETCH_STARTED });
export const userFetchSuccess = (payload) => ({
  type: USER_FETCH_SUCCESS,
  payload,
});
export const userFetchError = (payload) => ({
  type: USER_FETCH_ERROR,
  payload,
});

export const userFetch = (token) => async (dispatch) => {
  try {
    dispatch(userFetchStarted());
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();
    dispatch(userFetchSuccess(data));
  } catch (error) {
    dispatch(userFetchError(error.message));
  }
};

const initialState = {
  loading: false,
  data: null,
  error: null,
};

function reducerUser(state = initialState, action) {
  switch (action.type) {
    case USER_FETCH_STARTED:
      return { ...state, loading: true };
    case USER_FETCH_SUCCESS:
      return { loading: false, data: action.payload, error: false };
    case USER_FETCH_ERROR:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

export default reducerUser;
