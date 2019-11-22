import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes';

import './app.scss';

function App() {
  return (
    <Router>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/plugins">Plugins</Link>
          </li>
          <li>
            <Link to="/tests">Tests</Link>
          </li>
          <li>
            <Link to="/user">User screen</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact
            strict
          />
        ))}
      </div>
    </Router>
  );
}
export default App;
