import React from 'react';
export default class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picArr: [
                '/static/image/services/1.png',
                '/static/image/services/3.png',
                '/static/image/services/4.png',
                '/static/image/services/5.png',
                '/static/image/services/6.png',
            ],
            title: ' Smart Lighting Service Delivered',
            content: 'Star-An is a company focused on providing commercial and industrial clients with comprehensive, value-added smart lighting solutions. As a vertically-integrated manufacturer, our clientele save more money and enjoy the benefits of a streamlined process when implementing energy-efficient projects.'
        }
    }
    render() {
        return (
            <div className='wrap' >
                <section className='content'>
                    <p className='title'>{this.state.title}</p>
                    <p>{this.state.content}</p>
                </section>
                <section className='pic'>
                    <ul >
                        {this.state.picArr}
                        {/* { this.state.picArr.map((item, i) => {
                            return 
                            (<li className='pointer' key={i}>
                                <div className='img-pic' >
                                    <img src={item} />
                                </div>
                            </li>)
                        })} */}
                    </ul>
                </section>
            </div >
        );
    }
}

