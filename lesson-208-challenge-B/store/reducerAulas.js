// Constantes Redux
const COMPLETAR_AULA = 'COMPLETAR_AULA';
const COMPLETAR_CURSO = 'COMPLETAR_CURSO';
const RESETAR_CURSO = 'RESETAR_CURSO';

// Function Constructer
export function completarAula(payload) {
  return { type: COMPLETAR_AULA, payload };
}
export function completarCurso() {
  return { type: COMPLETAR_CURSO };
}
export function resetarCurso() {
  return { type: RESETAR_CURSO };
}

const aulas = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const reducerAulas = immer.produce((state, action) => {
  switch (action.type) {
    case 'COMPLETAR_AULA':
      state[action.payload - 1].completa = true;
      break;
    case 'COMPLETAR_CURSO':
      state.forEach((aula) => (aula.completa = true));
      break;
    case 'RESETAR_CURSO':
      state.forEach((aula) => (aula.completa = false));
      break;
  }
}, aulas);

export default reducerAulas;
