import React from 'react';
import { Carousel, CarouselItem } from 'antd';
import data from './data.js';
import style from './index.less';
export default class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={style.wrap} >
                <section className={style.banner}>
                    <Carousel effect="fade" autoplay>
                        {data.bannerArr.map((item,i) => {
                            return (
                                <div key={i} className={style.banner_img}>
                                    <img  src={item.pic} />
                                </div>
                            )
                        })}
                    </Carousel>
                </section>
                <section className={style.text} style={{ marginTop:20 }}>
                    <p className={style.content_text}>{data.msg}</p>
                </section>
                <section className={style.content}>
                    <ul >
                        {data.contentArr.map((item,i) => {
                            return (
                                <li key={i}>
                                    <div className={style.text_box_top} >
                                        <p className={style.text_box_top_title} style={{cursor:'pointer'}}>{item.title_top}</p>
                                        <section>
                                            {item.msg_top.map((item,i) => {
                                                return (
                                                    <p className={style.content_text} key={i}> {item}</p>
                                                )
                                            })}
                                        </section>
                                    </div>
                                    <div className={style.pic_box}>
                                        <img src={item.pic} className='pointer' />
                                    </div>
                                    <div className={style.text_box_bottom}>
                                        <p >{item.title_bottom}</p>
                                        {item.msg_bottom.map((item, ii) => {
                                            return (
                                                <p key={ii} className={style.content_text}> {item}</p>
                                            )
                                        })}
                                    </div>
                                </li>)
                        })}
                    </ul>
                </section>
            </div >
        )
    }
}