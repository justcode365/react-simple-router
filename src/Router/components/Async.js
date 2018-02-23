import React from 'react'
import { Consumer } from '../index'

export default () => (
  <Consumer>
    {({ redirect }) => (
      <div>
        Async
        <p>
          <button onClick={() => redirect('/')}>redirect</button>
        </p>
      </div>
    )}
  </Consumer>
)
