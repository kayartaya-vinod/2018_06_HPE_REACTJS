import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchContacts } from '../actions/contactsActions';

class SearchBox extends Component {
    render() {
        return (
            <input type="search" placeholder="Enter something.."
                className="form-control"
                onChange={e => { this.props.searchContacts(e.target.value) }} />
        );
    }
}

export default connect(null, { searchContacts })(SearchBox);