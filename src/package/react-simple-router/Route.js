import React, { Component } from 'react'
import { Consumer } from './Router'
import pathToRegexp from 'path-to-regexp'

class Route extends Component {
  match = () => {
    const { path, router, component, exact = false } = this.props

    let keys = []
    const re = pathToRegexp(path, keys, { end: exact })

    const result = re.exec(router)
    if (!result) return false
    if (result.length === 1) return {}

    const [_url, ...values] = result

    const params = keys.reduce((temp, key, index) => {
      temp[key.name] = values[index]
      return temp
    }, {})

    return params
  }

  render() {
    const { component, path, router } = this.props
    const params = this.match()
    const match = { path, url: router, params }

    return params ? React.createElement(component, { match }) : null
  }
}

export default props => <Consumer>{({ router }) => <Route {...props} router={router} />}</Consumer>
