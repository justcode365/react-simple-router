import React, { Component } from 'react'
import { Consumer } from './index'

class Header extends Component {
  componentDidMount() {
    console.log('mount Header')
  }

  render() {
    const { linkClick } = this.props
    return (
      <header>
        <a href="/home" onClick={linkClick}>
          Home
        </a>
        <br />
        <a href="/one" onClick={linkClick}>
          One
        </a>
        <br />
        <a href="/async" onClick={linkClick}>
          async
        </a>
        <br />
        <a href="/@someone" onClick={linkClick}>
          someone
        </a>
        <hr />
      </header>
    )
  }
}

export default () => <Consumer>{context => <Header linkClick={context.linkClick} />}</Consumer>
