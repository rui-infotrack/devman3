import createAction from 'utils/createAction';
import * as t from './actionTypes';

export const increment = createAction(t.INCREMENT);

export const decrement = createAction(t.DECREMENT);
