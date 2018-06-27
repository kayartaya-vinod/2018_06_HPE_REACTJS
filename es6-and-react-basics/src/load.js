import React, { Component } from 'react';

// UDF to check if the object/array is empty
function isEmpty(prop) {
    return (
        prop === null ||
        prop === undefined ||
        (prop instanceof Array && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
    );
}

export function load_v1(OldComponent) {
    return class NewComponent extends Component {
        render() {
            return isEmpty(this.props.contacts) ?
                <h1>Loading...</h1> :
                <OldComponent {...this.props} />;
        }
    }
}

export const load_v2 = OldComponent => props =>
    isEmpty(props.contacts) ?
        <h1>Loading...</h1> :
        <OldComponent {...props} />;


// carriage function 
export function load_v3(prop) {
    // returning a HOC
    return function (OldComponent) {
        return class NewComponent extends Component {
            render() {
                return isEmpty(this.props[prop]) ?
                    <h1>Loading...</h1> :
                    <OldComponent {...this.props} />;
            }
        }
    }
}

export const load = (prop) =>
    (OldComponent) => (props) =>
        isEmpty(props[prop]) ?
            <h1>Loading...</h1> :
            <OldComponent {...props} />