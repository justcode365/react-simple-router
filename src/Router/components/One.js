import React from 'react'
import { Consumer } from '../index'

export default () => {
  return (
    <div>
      One
      <Consumer>
        {context => {
          return (
            <div>
              <a href="/" onClick={context.linkClick}>
                Home
              </a>
            </div>
          )
        }}
      </Consumer>
    </div>
  )
}
