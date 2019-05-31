import { createLogic } from "redux-logic";
import { delay, filter, take } from 'rxjs/operators';
import { Observable } from "rxjs";
import { ActionBasis } from "redux-logic/definitions/action";

function nextAction<T extends string>(a$: Observable<ActionBasis<T>>, actionType: string) {
  return new Promise((resolve, reject) => {
    a$.pipe(
      filter(x => x.type === actionType),
      take(1)
    ).subscribe(
      x => resolve(x)
    )
  })
}

const pingPongLogic = createLogic({
  type: 'PING',
  async process({ action$ }, dispatch, _done) {
    await nextAction(action$, 'CONTINUE')
    await delay(1000)
    dispatch({ type: 'PONG '})
  }
})

export default [
  pingPongLogic
]