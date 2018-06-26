import React, { Component, Fragment } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="navbar navbar-default navbar-inverse">
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
          <Route path="/" exact={true} render={() => <h1>This is home!</h1>} />
          <Route path="/new-contact" render={() => <h1>Add new contact here</h1>} />
          <Route path="/all-contacts" render={() => <h1>List of contacts here</h1>} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
