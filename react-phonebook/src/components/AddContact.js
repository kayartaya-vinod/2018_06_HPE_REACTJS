// imrc
import React, { Component, Fragment } from 'react';

// ccs
class AddContact extends Component {
    state = {
        name: '',
        avatar: '',
        phone: '',
        email: '',
    }
    constructor() {
        super();
        this.submitHanlder = this.submitHanlder.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    submitHanlder(e) {
        this.props.addContact(this.state);
        this.setState({name: '', email: '', phone: '', avatar: ''});
        e.preventDefault();
    }

    changeHandler(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <h3 className="text-center alert alert-warning">Add a contact</h3>
                <form onSubmit={this.submitHanlder} className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-4">Name</label>
                        <div className="col-sm-8">
                            <input id="name" name="name"type="text"
                                value={this.state.name}
                                onChange={this.changeHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="control-label col-sm-4">Email</label>
                        <div className="col-sm-8">
                            <input id="email" name="email"type="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="control-label col-sm-4">Phone</label>
                        <div className="col-sm-8">
                            <input id="phone" name="phone"type="tel"
                                value={this.state.phone}
                                onChange={this.changeHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="avatar" className="control-label col-sm-4">Avatar</label>
                        <div className="col-sm-8">
                            <input id="avatar" name="avatar"type="text"
                                value={this.state.avatar}
                                onChange={this.changeHandler}
                                className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-8 col-sm-offset-4">
                            <button className="btn btn-primary">Add Contact</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default AddContact;