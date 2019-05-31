import { createLogic } from "redux-logic";
import { delay, filter, take } from 'rxjs/operators';
import { Observable } from "rxjs";
import { ActionBasis } from "redux-logic/definitions/action";
import { ActionType } from "./state";

function nextAction<T extends ActionType>(a$: Observable<ActionBasis<T>>, actionType: ActionType) {
  return new Promise((resolve, reject) => {
    a$.pipe(
      filter(x => x.type === actionType),
      take(1)
    ).subscribe(
      x => resolve(x)
    )
  })
}

const makeNextAction = <T extends ActionType>(a$: Observable<ActionBasis<T>>) => (actionType: ActionType) => nextAction(a$, actionType)
  

const pingPongLogic = createLogic({
  type: 'PING',
  async process({ action$ }, dispatch, _done) {
    const nextAction = makeNextAction(action$)

    await nextAction('CONTINUE')
    await delay(1000)
    dispatch({ type: 'PONG '})
  }
})

export default [
  pingPongLogic
]