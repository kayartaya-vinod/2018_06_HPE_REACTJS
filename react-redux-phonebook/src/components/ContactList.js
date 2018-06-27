import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadContacts } from '../actions/contactsActions';
import ContactCard from './ContactCard';
import * as $ from 'jquery';
import SearchBox from './SearchBox';

class ContactList extends Component {
    state = { currPage: 1 }

    componentDidMount() {
        if (this.props.contacts.length == 0) {
            this.props.loadContacts(this.state.currPage);
        }
        const me = this;
        $(window).scroll(function () {
            var w = $(window);
            var d = $(document);
            if (w.scrollTop() + w.height() == d.height()) {
                me.setState({ currPage: me.state.currPage + 1 },
                    () => { me.props.loadContacts(me.state.currPage); });
            }
            console.log('w.scrollTop()', w.scrollTop());
        });
    }

    render() {
        let cards = this.props.contacts.map(c =>
            <li key={c.id} className="list-group-item">
                <ContactCard contact={c} />
            </li>);

        return (
            <div className="row">
                <div className="col-sm-3"></div>

                <div className="col-sm-6">
                    <SearchBox />
                    <ul className="list-group">
                        {cards}
                    </ul>

                    <button
                        onClick={() => {
                            // this.setState takes 2 arguments
                            // 1. new state
                            // 2. a callback which is executed after the state changes
                            this.setState({ currPage: this.state.currPage + 1 },
                                () => { this.props.loadContacts(this.state.currPage); });

                        }}
                        className="btn btn-default btn-block">Load more...</button>
                </div>

                <div className="col-sm-3"></div>
            </div>
        );
    }
}

let mapStateToProps = state => ({
    contacts: state.contacts
});

// 'connect' is a function that returns a Higher order component
// the first parameter to the connection is a mapper of 
// state (of the store) to props (of this component)

// the second parameter is the list of action functions you want thunk to intercept
export default connect(mapStateToProps, { loadContacts })(ContactList);

// once this 'connect'ion is done, the component will have the following props:
// 1. this.props.contacts           --> array
// 2. this.props.loadContacts      --> function