import { createLogic } from "redux-logic";
import { delay } from 'rxjs/operators';

const pingPongLogic = createLogic({
  type: 'PING',
  async process(_deps, dispatch, _done) {
    await delay(1000)
    dispatch({ type: 'PONG '})
  }
})

export default [
  pingPongLogic
]