import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contactsActions';

class AddContact extends Component {

    state = {
        name: '',
        avatar: '',
        phone: '',
        email: '',
        formValid: false,
        formDirty: false
    }
    isFormValid() {
        return this.state.name !== '' &&
            this.state.email !== '' &&
            this.state.phone !== '';
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value },
            () => { this.setState({ formValid: this.isFormValid(), formDirty: true }) });
    }

    constructor(props) {
        super(props);
        this.submitHanlder = this.submitHanlder.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }


    submitHanlder(e) {
        e.preventDefault();
        let contact = {...this.state};
        delete contact.formDirty;
        delete contact.formValid;
        
        this.props.addContact(contact);

        // programatically redirect to another Route
        this.props.history.push('/all-contacts');
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4" >
                        <h3 className="text-center">Add new contact details</h3>
                        <form onSubmit={this.submitHanlder} className="form">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">Name</label>
                                <div>
                                    <input id="name" name="name" type="text"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="control-label">Email</label>
                                <div>
                                    <input id="email" name="email" type="email"
                                        value={this.state.email}
                                        onChange={this.changeHandler}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="control-label">Phone</label>
                                <div>
                                    <input id="phone" name="phone" type="tel"
                                        value={this.state.phone}
                                        onChange={this.changeHandler}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="avatar" className="control-label">Avatar</label>
                                <div>
                                    <input id="avatar" name="avatar" type="text"
                                        value={this.state.avatar}
                                        onChange={this.changeHandler}
                                        className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-8 col-sm-offset-4">
                                    <button
                                        disabled={this.state.formValid === false}
                                        className="btn btn-primary">Add Contact</button>
                                </div>
                            </div>
                            <div className="row form-group"
                                hidden={this.state.formDirty === false || this.state.formValid === true}>
                                <div className="col-sm-12">
                                    <div className="alert alert-danger text-center">
                                        Name, email and phone is required!</div>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </Fragment>
        );
    }
}

export default connect(null, { addContact })(AddContact);