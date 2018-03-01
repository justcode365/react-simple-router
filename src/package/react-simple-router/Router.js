import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext({})

export { Consumer }

export default class Router extends Component {
  constructor(props) {
    super(props)

    const { pathname } = window.location
    this.state = { router: pathname }
  }

  componentDidMount() {
    // 浏览器 前进 后退
    window.onpopstate = e => {
      this.setState({ router: e.state.pathname })
    }
  }

  redirect = pathname => {
    this.setState({ router: pathname })
    window.history.pushState({ pathname }, '', pathname) // 改变 地址
  }

  // matchRouter = route => {
  //   const C = routeConfig[route]

  //   if (C) {
  //     return <C />
  //   } else {
  //     for (const param of routeConfig.params) {
  //       const match = route.match(new RegExp(param.replace(/:[^\s/]+/g, '([\\w-]+)')))
  //       if (match) {
  //         const D = routeConfig[param]
  //         const value = match[1]
  //         const key = param.split(':')[1].split('/')[0]
  //         return <D params={{ [key]: value }} />
  //       }
  //     }
  //   }

  //   if (!C) throw new Error('路由有错误')
  // }

  render() {
    const { router } = this.state
    return <Provider value={{ redirect: this.redirect, router }}>{this.props.children}</Provider>
  }
}
