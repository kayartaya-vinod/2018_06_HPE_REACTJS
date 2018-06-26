import React, { Fragment } from 'react';
import ContactCard from './ContactCard';

// functional / stateless component
export default (props) => {

    const cards = props.contacts.map(c =>
        <li className="list-group-item" key={c.id}>
            <ContactCard contact={c} {...props} />
        </li>)

    return <Fragment>
        <ul className="list-group">
            {cards}
        </ul>
    </Fragment>;
}