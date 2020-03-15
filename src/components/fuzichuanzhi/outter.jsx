import React, { Component } from 'react';
import ReactTypes from'prop-types';
import Middle from './middle.jsx';
class Outter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }
    //设置父子组件共享数据,在父组件中定义一个function，这个function有固定的名称，
    //叫做getChildContent,内部必须返回一个对象
    getChildContext(){ 
        return {
            color:this.state.color
        }
    }
    static childContextTypes = {
        color:ReactTypes.string //规定了传递给子组件的数据类型
    }
    render() {
        return (
            <div>
                <h1>这是爷爷组件</h1>
                <Middle ></Middle>
            </div>

        );
    }
}

export default Outter;