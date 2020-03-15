import React, { Component } from 'react';
import Child from './inner.jsx';
class Middle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log('props',this.props)
        return (
            <div>
                <h3>这是父组件</h3>
                <Child></Child>
            </div>
        );
    }
}

export default Middle;