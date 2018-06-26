import React from 'react';

export default ({ contact, deleteContact }) => <div className="row">
    <div className="col-xs-4">
        <img src={contact.avatar} alt={contact.name} className="img img-circle" />
    </div>
    <div className="col-xs-8">
        <h3>{contact.name}
            <span
                onClick={() => {
                    if (window.confirm('Are you sure to delete this?')) {
                        deleteContact(contact.id);
                    }
                }}
                className="glyphicon glyphicon-trash pull-right"></span>
        </h3>
        <p>{contact.email}<br />{contact.phone}</p>
    </div>
</div>;