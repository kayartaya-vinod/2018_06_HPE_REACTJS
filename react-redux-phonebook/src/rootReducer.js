import { combineReducers } from 'redux';
import contactsReducer from './reducers/contactsReducer';

export default combineReducers({
    // list of all reducers you want to include in the store
    contacts: contactsReducer
    // in the redux-devtools-extension the name of the reducer (contacts)
    // listed here is found in the state->tree
});
