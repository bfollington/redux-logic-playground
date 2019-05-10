import { Action, ActionType } from './state'
import { mapTo, delay, switchMap, take } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { ofType, combineEpics } from 'redux-observable'

const waitFor = (a$: Observable<Action>, type: ActionType) =>
  switchMap(() => 
    a$.pipe(
      ofType(type),
      take(1)
    )
  )

export const pingEpic = (action$: Observable<Action>): Observable<Action> => action$.pipe(
  ofType('PING'),
  waitFor(action$, 'CONTINUE'),
  delay(1000),
  mapTo({ type: 'PONG' })
)

export default combineEpics(
  pingEpic
)