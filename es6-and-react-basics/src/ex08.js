import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SimpleCalci extends Component {
    state = { result: null }

    buttonHandler(oper) {
        let n1 = this.refs.n1.value;
        let n2 = this.refs.n2.value;
        this.setState({ result: eval(`${n1} ${oper} ${n2}`) });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="number 1" ref="n1" />
                    <input type="text" placeholder="number 2" ref="n2" />
                </div>
                <div>
                    <button onClick={() => this.buttonHandler('+')}>Add</button>
                    <button onClick={() => this.buttonHandler('-')}>Subtract</button>
                    <button onClick={() => this.buttonHandler('*')}>Multiply</button>
                    <button onClick={() => this.buttonHandler('/')}>Divide</button>
                </div>
                <div>
                    {this.state.result ? 'The result is ' + this.state.result : ''}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<SimpleCalci />, document.querySelector('#root'));
