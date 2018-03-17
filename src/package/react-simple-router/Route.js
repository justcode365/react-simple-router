// @flow

import React, { Component } from 'react'
import { Consumer } from './Router'
import matchPath from './matchPath'

type Props = {
  render: () => void
}

class Route extends Component<Props> {
  render() {
    const { component, path, router, exact, render } = this.props
    const match = matchPath(path, router, exact)
    const props = { match }

    if (render) return match ? render(props) : null
    return match ? React.createElement(component, props) : null
  }
}

export default props => <Consumer>{({ router }) => <Route {...props} router={router} />}</Consumer>
