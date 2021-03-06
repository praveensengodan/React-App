import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory} from 'react-router'
import AddForm from './containers/formData'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}></Route>
      <Route path='/form' component={AddForm}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
