import React, { Component } from 'react';
import {connect} from 'react-redux';
class ComA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleAdd(){
        console.log('props',this.props)
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleAdd.bind(this)}></button>
            </div>
         );
    }
}
 
const mapDispatchToProp = (dispatch)=>{
    return {
       sendAction:()=>{
        dispatch({    //ation
            type:'add_action'
        }) 
       } 
    }
}
 
export default connect(null,mapDispatchToProp)(ComA); 