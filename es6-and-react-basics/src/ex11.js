import { createStore } from 'redux';

// a reducer is a function (invoked always by redux)
// and receives the state and action (dispatched by the UI)
function namesReducer(state = [], action = {}) {
    // Based on action.type, this function should
    // return modified (reduced) version of the state.
    // The action must have "type" property and some data
    switch (action.type) {
        case 'ADD_NAME':
            return [...state, action.newName];
        case 'DELETE_NAME':
            let tmp = [...state];
            tmp.splice(action.index, 1);
            return tmp;
        default:
            return state;
    }
}


// a store is created using 'createStore' redux function
// and is based on a reducer or a combination of one or more reducers
const store = createStore(namesReducer);

function showNames() {
    let liNames = store.getState()
        .map((name, index) => `<li>
        <a href='javascript:void(0)' onclick='deleteName(${index})'>
        ${name}</a></li>`)
        .join('');
    document.getElementById('namesList').innerHTML = liNames;
}

window.deleteName = function (index) {
    store.dispatch({ type: 'DELETE_NAME', index });
}

// the store invokes the subscirber function (showNames)
// whenever the state in the store changes. 
store.subscribe(showNames);

// on the button click, we want to dispatch a new action
document.getElementById('btnAdd').onclick = () => {
    let tfName = document.getElementById('tfName');
    store.dispatch({ type: 'ADD_NAME', newName: tfName.value });
    tfName.value = '';
    tfName.focus();
};