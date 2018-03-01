import React, { Component } from 'react'
import { Consumer } from './Router'
import pathToRegexp from 'path-to-regexp'

class Route extends Component {
  match = (path, url) => {
    return true
  }

  paramsMatch = (path, url) => {
    let keys = []
    let re = pathToRegexp(path, keys)
    const match = re.exec(url)

    if (!match) return {}

    const [_url, ...values] = match

    console.log(keys, values)
    return keys.reduce((temp, key, index) => {
      temp[key.name] = values[index]
      return temp
    }, {})
  }

  render() {
    const { path, component, url } = this.props
    const params = this.paramsMatch(path, url)
    const props = { match: { path, url, params } }

    return this.match(path, url) ? React.createElement(component, props) : null
  }
}

export default props => <Consumer>{({ router }) => <Route {...props} url={router} />}</Consumer>
