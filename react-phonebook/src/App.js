import React, { Component, Fragment } from 'react';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

// REST endpoint
const BASE_URL = 'http://localhost:4000/contacts/';

class App extends Component {

  // when the state is changed using (and only using) setState(..) 
  // the component and children are re-rendered
  state = {
    contacts: []
  }

  constructor() {
    super(); // mandatory, when extended from another class
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(contacts => this.setState({ contacts }));
  }

  addContact(contact) {
    fetch(BASE_URL, {
      method: 'post',
      body: JSON.stringify(contact),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ contacts: [resp, ...this.state.contacts] });
      });
  }

  deleteContact(id) {
    fetch(BASE_URL + id, { method: 'delete' })
      .then(() => {
        let contacts = [...this.state.contacts];
        let index = contacts.findIndex(c => c.id === id);
        contacts.splice(index, 1);
        this.setState({ contacts });
      });
  }

  render() {
    const childProps = {
      contacts: this.state.contacts,
      deleteContact: this.deleteContact.bind(this),
      addContact: this.addContact.bind(this)
    };
    return (
      <Fragment>
        <div className="row">
          {/* placeholder for the header component (to be done later) */}
        </div>
        <div className="row">
          <div className="col-sm-5">
            <AddContact {...childProps} />
          </div>
          <div className="col-sm-7">
            <ContactList {...childProps} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
