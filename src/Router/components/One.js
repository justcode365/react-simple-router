import React from 'react'
import { Consumer } from '../index'

export default () => {
  return (
    <div>
      One
      <Consumer>
        {context => {
          console.log(context)
          return (
            <div>
              <a href="/" onClick={context.router}>
                HOme
              </a>
            </div>
          )
        }}
      </Consumer>
    </div>
  )
}
