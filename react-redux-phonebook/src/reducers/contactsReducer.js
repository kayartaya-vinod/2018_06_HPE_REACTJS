import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS } from '../actions/types';

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload]; // payload here is a contact object
        case DELETE_CONTACT:
            let tmp = [...state];
            let index = tmp.findIndex(c => c.id === action.payload); // payload here is the id
            tmp.splice(index, 1);
            return tmp;
        case FETCH_CONTACTS:
            return action.payload; // payload here is the list of all contacts
        default:
            return state;
    }
}