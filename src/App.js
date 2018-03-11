import React from 'react'
import { Router, Route, Link } from './package/react-simple-router'

const BasicExample = () => (
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
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

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

export default BasicExample
