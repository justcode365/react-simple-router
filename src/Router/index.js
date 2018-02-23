import React, { Component, createContext } from 'react'
import Header from './Header'
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

  linkClick = e => {
    e.preventDefault() // 阻止页面跳转刷新
    const { pathname } = e.currentTarget //事件冒泡
    this.redirect(pathname)
  }

  redirect = pathname => {
    this.setState({ route: pathname })
    window.history.pushState({ pathname }, '', pathname) // 改变 地址
  }

  matchRouter = route => {
    const C = routeConfig[route]

    if (C) {
      return <C />
    } else {
      for (const param of routeConfig.params) {
        const match = route.match(new RegExp(param.replace(/:[^\s/]+/g, '([\\w-]+)')))
        if (match) {
          const D = routeConfig[param]
          const value = match[1]
          const key = param.split(':')[1].split('/')[0]
          return <D params={{ [key]: value }} />
        } else {
          throw new Error('路由有错误')
        }
      }
    }
  }

  render() {
    const { route } = this.state
    return (
      <Provider value={{ linkClick: this.linkClick, redirect: this.redirect }}>
        <Header />
        {this.matchRouter(route)}
      </Provider>
    )
  }
}
