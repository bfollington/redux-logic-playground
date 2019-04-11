import React from 'react'

type Props = {
  count: number
}

const Counter = ({ count }: Props) => (
  <div>
    Count: { count }
  </div>
)

export default Counter