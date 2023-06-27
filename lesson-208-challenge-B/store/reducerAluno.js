// Constantes Redux
const INCREMENTAR_TEMPO = 'INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'MODIFICAR_EMAIL';

// Function Constructer
export const incrementar = (payload) => ({ type: INCREMENTAR_TEMPO, payload });
export const reduzir = (payload) => ({ type: REDUZIR_TEMPO, payload });
export const modificarEmail = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});

const aluno = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

const reducerAluno = immer.produce((state, action) => {
  switch (action.type) {
    case 'INCREMENTAR_TEMPO':
      state.diasRestantes = state.diasRestantes + action.payload;
      break;
    case 'REDUZIR_TEMPO':
      state.diasRestantes = state.diasRestantes - action.payload;
      break;
    case 'MODIFICAR_EMAIL':
      state.email = action.payload;
      break;
  }
}, aluno);

export default reducerAluno;
