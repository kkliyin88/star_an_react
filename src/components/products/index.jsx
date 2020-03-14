import React from 'react';
import { Link } from 'react-router-dom';
import less from './index.less'
export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'LED Lighting Fixture',
            msg1: 'Intelligent lighting control system can optimize energy efficiency and comfort. Whether driving operational cost reduction through energy efficient LED lighting technologies or implementing a smart strategy to achieve advanced LED fixture management capabilities. Our goal is to help our clients save energy, time and money by using the most advanced effective lighting solutions for the specific application',
            picArr1: [

                {
                    piclink: '/static/image/products/ZigBee-Sensor.png',
                    routerPath: { path: '/products/levelOne', query: { name: 'sensor' } },
                    msg: 'ZigBee Sensor',
                },
                {
                    piclink: '/static/image/products/ZigBee-Smart-Controller.png',
                    routerPath: { path: '/products/levelOne', query: { name: 'controller' } },
                    msg: 'ZigBee Smart Controller'
                },
                {
                    piclink: '/static/image/products/ZigBee-Smart-Driver.png',
                    routerPath: { path: '/products/levelOne', query: { name: 'driver' } },
                    msg: 'ZigBee Smart Driver'
                },

            ],
            picArr2: [
                {
                    title_1: 'About us ',
                    msg_top: [
                    ],
                    piclink: '/static/image/products/ZigBee-Gateway.png',
                    routerPath: { path: '/products/levelTwo', query: { name: 'gateway', id: 4 } },
                    msg: 'ZigBee-Gateway'
                },

                {
                    piclink: '/static/image/products/ZigBee-Touch-Switch.png',
                    routerPath: { path: '/products/levelTwo', query: { name: 'touch-switch', id: 5 } },
                    msg: 'ZigBee Touch Switch',
                },
                {
                    piclink: '/static/image/products/ZigBee-Remote-Controller.png',
                    routerPath: { path: '/products/levelTwo', query: { name: 'remote-control', id: 6 } },
                    msg: 'ZigBee Remote Controller',
                },
            ]
        }
    }
    render() {
        return (
            <div className={less.wrap} >
                <section className={less.text}>
                    <p className={less.title}>{ this.state.title }</p>
                    <p className={less.content}>{ this.state.msg1 }</p>
                </section>
                <section className={less.pic}>
                    <ul >
                        {
                            this.state.picArr1.map((item, i) => {
                                return (
                                    <li  key={i} className={less.pointer}>
                                        <Link to={`/products/levelOne/${item.routerPath.query.name}/${i+1}`}>
                                            <div  >
                                                <img src={item.piclink} />
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section >
                <section className={less.pic} >
                    <ul >
                        {
                            this.state.picArr2.map((item, i) => {
                                return (
                                    <li  key={i} className={less.pointer}>
                                        <Link to={`/products/levelTwo/${item.routerPath.query.name}/${i+4}`}>
                                            <div  >
                                                <img src={item.piclink} />
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section >
            </div >
        );
    }
}