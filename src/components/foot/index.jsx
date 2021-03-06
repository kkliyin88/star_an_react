import React from 'react';
import style from './index.css';
import Outter from '../fuzichuanzhi/outter.jsx';
import store from '../../redux/store';
import {sendAction} from '../../redux/action';

import ComA from '../../react_redux/comA.jsx';
import ComB from '../../react_redux/comB.jsx';

export default class Foot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: [
                '@2019 Copyright Star-An Limited. All rights reserved.',
                'Office Address:',
                'B906, Nanfang Building',
                'Luofang Rd., Luohu Dist.,',
                'Shenzhen, China, 518000.',
                'Tel: +86 755 82683776',
                'Email: info@star-an.com'
            ]
        };
    }
    handleClick(){
        console.log('触发了点击事件')
        const action = sendAction();
        store.dispatch(action);
    }
    render() {
        return (
            <div className={style.foot}>
                 <p>----------------redux--------------------------</p>
                <span style={{color:'red'}}>{store.getState().value}</span>
                <Outter></Outter>
                <button onClick={this.handleClick.bind(this)}>学习redux demo</button>
                <p>----------------react-redux--------------------------</p>
                <ComA></ComA>
                <ComB></ComB>
                <ul className={style.foot_ul}>
                    <li className={style.foot_ul_li}>
                        {this.state.address.map((item,i) => {
                            return <p key={i} style={{ color: '#FFF' }}>{item}</p>
                        })}
                    </li>
                </ul>
            </div>
        );
    }

}
