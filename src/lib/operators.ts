import { filter, switchMap, take } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { ActionType } from '../state';
import { Action } from 'redux-logic';

export const ofType = (type: ActionType) => filter((a: Action) => a.type === type)

export const waitFor = (a$: Observable<Action>, type: ActionType) =>
  switchMap(() => 
    a$.pipe(
      ofType(type),
      take(1)
    )
  )