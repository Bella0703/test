import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import store from './store'
import Layout from './view/layout';


function render() {
  ReactDOM.render(
    <Provider {...store}>
      <BrowserRouter>
        <Route exact path="/" component={Layout} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept(() => render())
}
