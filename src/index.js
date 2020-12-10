import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary';

const context = require.context('./pages', true, /\.js$/);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Switch>
          {context.keys().map(path => {
            const name = path.replace('./', '').replace('.js', '');
            return <Route key={path} path={`/${name}`} component={require(`./pages/${name}.js`).default} />
          })}
          {/* 必须在最后 */}
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
