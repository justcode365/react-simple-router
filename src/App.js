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
          <Link to="/topics/sdf">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics/:id" component={Topic} />
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

const Topic = ({ match }) => (
  <div>
    <h1>
      <pre>{JSON.stringify(match, null, ' ')}</pre>
    </h1>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`/topics/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`/topics/components`}>Components</Link>
      </li>
      <li>
        <Link to={`/topics/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`/topics/:topicId`} component={Topic} />
    {/* <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} /> */}
  </div>
)

export default BasicExample
