import { Action } from './state'
import { filter, mapTo, delay } from 'rxjs/operators'
import { Observable } from 'rxjs';

export const pingEpic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  filter(action => action.type === 'PING'),
  delay(1000),
  mapTo({ type: 'PONG' })
)