import React, { Component } from 'react'

import Home from './components/Home'
import One from './components/One'
import User from './components/User'

//在webpack 中 dynamic import 需要带参数 而不是变量
// https://webpack.js.org/api/module-methods/#import-
const router = {
  '/': Home,
  '/home': Home,
  '/one': One,
  '/async': asyncload(() => import('./components/Async')),
  '/@:user': User
}

export default {
  ...router,
  params: Object.keys(router).filter(v => v.includes(':'))
}

function asyncload(importComponent) {
  return class extends Component {
    state = { component: null }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({ component })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : null
    }
  }
}
