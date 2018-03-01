import React, { Component } from 'react'
import { Consumer } from './Router'

class Route extends Component {
  match = (path, router) => {
    return path === router
  }

  render() {
    const { path, component, router } = this.props

    return (
      <Consumer>
        {({ router }) => (this.match(path, router) ? React.createElement(component) : null)}
      </Consumer>
    )
  }
}

export default Route
