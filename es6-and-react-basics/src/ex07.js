import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {

    state = { num: 0 }

    render() {
        console.log('Counter.render() called...');
        return (
            //   div>h1{Counter application}+hr+p{By Vinod}
            <div>
                <h1>Counter application</h1>
                <hr />
                <p>By Vinod</p>
                <h3>Current value of counter is {this.state.num}</h3>
                <button onClick={() => {
                    // this is the wrong way of mutating the state; use setState instead
                    // this.state.num++;

                    // this.setState is a react function, which tells react to re-render this component and since the state is changed, the counter will display with new value
                    this.setState({ num: this.state.num + 1 });
                }}>Increment counter</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));