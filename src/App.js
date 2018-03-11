import React from 'react'
import asyncload from './package/react-async-load'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from './package/react-simple-router'

export default () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/async">Async</Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/async" component={asyncload(() => import('./components/Async.js'))} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class About extends React.Component {
  state = { redirect: false }
  render() {
    if (this.state.redirect) return <Redirect to="/" />
    return (
      <div>
        <h2>About</h2>
        <button onClick={() => this.setState({ redirect: true })}>Back Home </button>
      </div>
    )
  }
}

const Topics = ({ match }) => (
  <div>
    <pre>{JSON.stringify(match, null, '  ')}</pre>

    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state/helloworld`}>Props v. State</Link>
      </li>
    </ul>

    <Route exact path={`${match.url}/:id`} component={Topic1} />
    <Route path={`${match.url}/:id/:title`} component={Topic2} />
    <Route exact path={match.url} component={Other} />
  </div>
)

const Topic1 = ({ match }) => (
  <div>
    Topic1
    <pre>{JSON.stringify(match, null, '  ')}</pre>
  </div>
)

const Topic2 = ({ match }) => (
  <div>
    Topic2
    <pre>{JSON.stringify(match, null, '  ')}</pre>
  </div>
)

const Other = ({ match }) => (
  <h3>
    <pre>{JSON.stringify(match, null, '  ')}</pre>
    Please select a topic.
  </h3>
)

const NotFound = () => <h1>Not Found</h1>
