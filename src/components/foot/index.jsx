import React from 'react';
import style from './index.css';
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
    render() {
        return (
            <div className={style.foot}>
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
