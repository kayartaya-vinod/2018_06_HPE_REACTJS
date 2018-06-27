import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS } from "./types";

const BASE_URL = 'http://localhost:4000/contacts/';

// action is an object with "type" and "payload" properties
// an action creator is custom helper function that takes payload returns an action

// this module exports functions that can be used in a component



/*
function addContact(contact) {
    return function(dispatch) {
        fetch(BASE_URL, {})
            .then(resp => resp.json())
            .then(resp => dispatch({ type: ADD_CONTACT, payload: resp }));
    }
}
*/

// these are thunk actions
// carriage functions
export const addContact = (contact) => (dispatch) => {
    fetch(BASE_URL, {
        method: 'post',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(resp => dispatch({ type: ADD_CONTACT, payload: resp }));
}

/*
function deleteContact(id) {
    return function (dispatch) {
        fetch(BASE_URL + id, { method: 'delete' })
            .then(resp => dispatch({ type: DELETE_CONTACT, payload: id }));
    }
}
*/

export const deleteContact = id => dispatch =>
    fetch(BASE_URL + id, { method: 'delete' })
        .then(resp => dispatch({ type: DELETE_CONTACT, payload: id }));

/*
function fetchContacts() {
    return function (dispatch) {
        fetch(BASE_URL)
            .then(resp => resp.json())
            .then(resp => dispatch({ type: FETCH_CONTACTS, payload: resp }));
    }
}
*/

export const fetchContacts = () => dispatch =>
    fetch(BASE_URL)
        .then(resp => resp.json())
        .then(resp => dispatch({ type: FETCH_CONTACTS, payload: resp }));

