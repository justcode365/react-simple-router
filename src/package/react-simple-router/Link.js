import React, { Component } from 'react'
import { Consumer } from './Router'

class Link extends Component {
  handleClick = e => {
    e.preventDefault() // 阻止页面跳转刷新
    const { to, redirect } = this.props
    redirect(to)
  }

  render() {
    const { to, children } = this.props

    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

export default props => (
  <Consumer>{({ redirect }) => <Link {...props} redirect={redirect} />}</Consumer>
)
