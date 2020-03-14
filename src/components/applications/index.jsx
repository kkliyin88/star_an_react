import React from 'react';
import less from './index.less';
import { Link } from 'react-router-dom'
export default class Applications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'LED Lighting Fixture',
            msg1: 'Intelligent lighting control system can optimize energy efficiency and comfort. Whether driving operational cost reduction through energy efficient LED lighting technologies or implementing a smart strategy to achieve advanced LED fixture management capabilities. Our goal is to help our clients save energy, time and money by using the most advanced effective lighting solutions for the specific application',
            picArr: [
                {
                    title_1: 'About us ',
                    piclink: '/static/image/applications/1.png',
                    routerPath: { path: '/applications/detail', query: { id: 1 } },
                },
                {
                    piclink: '/static/image/applications/2.png',
                    routerPath: { path: '/applications/detail', query: { id: 2 } },
                },
                {
                    piclink: '/static/image/applications/3.png',
                    routerPath: { path: '/applications/detail', query: { id: 3 } },
                },
                {
                    piclink: '/static/image/applications/4.png',
                    routerPath: { path: '/applications/detail', query: { id: 4 } },
                },
                {
                    piclink: '/static/image/applications/5.png',
                    routerPath: { path: '/applications/detail', query: { id: 5 } },
                },
                {
                    piclink: '/static/image/applications/6.png',
                    routerPath: { path: '/applications/detail', query: { id: 6 } },
                },
            ],
        }
    }
    render() {
        return (
            <div className={less.wrap} >
                <section className={less.pic}>
                    <ul >
                        {
                            this.state.picArr.map((item, i) => {
                                return (
                                    <li style={{cursor:'pointer'}} key={i} onClick={this.goDetail.bind(this,item)}>
                                       <Link to={`/applications/detail/${i+1}`}>
                                        <div className={less.img_pic} >
                                            <img src={item.piclink} />
                                        </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        );
    }
    goDetail(item){

        // this.props.history.push(item.routerPath.path+'/'+item.routerPath.query.id)
    }

}