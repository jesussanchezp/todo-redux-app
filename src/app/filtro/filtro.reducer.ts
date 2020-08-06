import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const estadoInicial: filtrosValidos = 'todos';

const _FILTRO_REDUCER = createReducer(estadoInicial,
  on(setFiltro, (state, {filtro}) => filtro)
);

export function filtroReducer(state, action): any {
  return _FILTRO_REDUCER(state, action);
}
