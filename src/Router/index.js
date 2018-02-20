import React, { Component, createContext } from 'react'
import routeConfig from './route'

const store = {
  text: 'hello world!'
}

const ctx = createContext(store)

const { Provider, Consumer } = ctx

export { Consumer }

export default class Router extends Component {
  constructor() {
    super()

    const { pathname } = window.location
    this.state = { route: pathname }
  }

  componentDidMount() {
    // 浏览器 前进 后退
    window.onpopstate = e => {
      this.setState({ route: e.state.pathname })
    }
  }

  handleClick = e => {
    // 阻止页面跳转刷新
    e.preventDefault()
    const { pathname } = e.target
    this.setState({ route: pathname })
    // 改变 地址
    window.history.pushState({ pathname }, '', pathname)
  }

  render() {
    const { route } = this.state
    const C = routeConfig[route]
    return (
      <Provider value={{ router: this.handleClick }}>
        <div>
          <a href="/home" onClick={this.handleClick}>
            Home
          </a>
          <br />
          <a href="/one" onClick={this.handleClick}>
            One
          </a>
          <br />
          <a href="/async" onClick={this.handleClick}>
            async
          </a>
          <hr />
          <C />
        </div>
      </Provider>
    )
  }
}
