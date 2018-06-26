import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// this component allows us to add/view/delete names of friends
class Names extends Component {
    state = { names: ['Vinod', 'Shyam', 'John', 'Jane'] }

    addName(name) {
        this.setState({ names: [...this.state.names, name] });
    }

    deleteName(index) {
        // console.log('deleting name at index', index);
        let names = [...this.state.names];
        names.splice(index, 1);
        this.setState({ names });
    }

    render() {
        return (
            <div>
                <NameForm addName={this.addName.bind(this)} />
                <NamesList names={this.state.names}
                    deleteName={this.deleteName.bind(this)} />
            </div>
        );
    }
}

class NameForm extends Component {
    addName() {
        let tf = this.refs.tfName;
        this.props.addName(tf.value);
        tf.value = '';
        tf.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref="tfName" placeholder="Enter a name" />
                <button onClick={this.addName.bind(this)}>Add name</button>

            </div>
        );
    }
}

class NamesList extends Component {
    render() {
        // converting an array of "names" into an array of "JSX elements"
        let namesAsListItems = this.props.names.map(
            (name, index) => <li key={index}>{name} &nbsp;
                <span style={{ cursor: 'pointer' }}
                    onClick={() => this.props.deleteName(index)}>x</span>
            </li>
        );

        return <ul>
            {namesAsListItems}
        </ul>;
    }
}

ReactDOM.render(<Names />, document.getElementById('root'));