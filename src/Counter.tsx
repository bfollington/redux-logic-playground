import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { Action } from './state';

type Props = {
  count: number,
  onPing: () => void,
  pingPong: string,
}

const Counter = ({ count, onPing, pingPong }: Props) => (
  <div>
    Count: { count }

    <button type="button" onClick={onPing}>Ping</button>
    { pingPong }
  </div>
)

export default connect(
  (state: any) => ({
    count: state.counter,
    pingPong: state.pingPong,
  }),
  (dispatch: Dispatch<Action>) => ({
    onPing: () => dispatch({ type: 'PING' })
  })
)(Counter)