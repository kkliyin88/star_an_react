import React, { Component } from 'react';
import ReactTypes from'prop-types';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    static contextTypes={
       color:ReactTypes.string 
    }
    render() { 
        return ( 
         <h3>这是孙子组件{this.context.color}</h3>
         );
    }
}
 
export default Child;