import React, { Component, Fragment } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <div className="navbar navbar-default navbar-inverse navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <Link to="/" className="navbar-brand">Phonebook App V2</Link>
                </div>
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/new-contact">New contact</Link>
                  </li>
                  <li>
                    <Link to="/all-contacts">View all contacts</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: '60px' }}>
              <Route path="/" exact={true} render={() => <h1>This is home!</h1>} />
              <Route path="/new-contact" component={AddContact} />
              <Route path="/all-contacts" component={ContactList} />
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
