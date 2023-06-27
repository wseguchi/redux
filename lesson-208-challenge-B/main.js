import store from './store/configureStore.js';
import { incrementar, reduzir, modificarEmail } from './store/reducerAluno.js';
import {
  completarAula,
  completarCurso,
  resetarCurso,
} from './store/reducerAulas.js';

// Constantes Html
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const tempoRestante = document.querySelector('#tempoRestante');
const aulasCompletas = document.querySelector('#aulasCompletas');

function calculaAulasCompletas(curState) {
  curState.reducerAulas.filter((completa) => completa === true).length;
}

function render() {
  const { reducerAluno, reducerAulas } = store.getState();
  nome.innerText = reducerAluno.nome;
  email.innerText = reducerAluno.email;
  tempoRestante.innerText = reducerAluno.diasRestantes;
  aulasCompletas.innerHTML = reducerAulas.filter(
    (aula) => aula.completa === true,
  ).length;
}

// Renders for the 1st time
render();

store.subscribe(render);

// Buttons Actions
document
  .querySelector('#btnIncrementarTempo')
  .addEventListener('click', () => store.dispatch(incrementar(1)));
document
  .querySelector('#btnReduzirTempo')
  .addEventListener('click', () => store.dispatch(reduzir(1)));
document
  .querySelector('#btnModificarEmail')
  .addEventListener('click', () =>
    store.dispatch(modificarEmail(document.querySelector('#inpEmail').value)),
  );
document
  .querySelector('#btnCompletarAula')
  .addEventListener('click', () =>
    store.dispatch(completarAula(document.querySelector('#inpAulaId').value)),
  );
document
  .querySelector('#btnCompletarCurso')
  .addEventListener('click', () => store.dispatch(completarCurso()));
document
  .querySelector('#btnResetarCurso')
  .addEventListener('click', () => store.dispatch(resetarCurso()));
