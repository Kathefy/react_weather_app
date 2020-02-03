import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotFoundPage } from './containers';
import { HashRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<HashRouter>
  <>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={NotFoundPage} exact path="*" />
    </Switch>
  </>
</HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
