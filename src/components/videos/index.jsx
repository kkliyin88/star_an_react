import React from 'react';
import less from './index.less';
export default class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videosPaths: [
                {
                    "url": "/static/image/video/1.mp4",
                    "defaultPic": "/static/image/video/1.png",
                    "title": "Individual Daylight Sensor Control Effect"
                },
                {
                    "url": "/static/image/video/2.mp4",
                    "defaultPic": "/static/image/video/2.png",
                    "title": "Individual Motion Sensor Control Effect"
                },
                {
                    "url": "/static/image/video/3.mp4",
                    "defaultPic": "/static/image/video/3.png",
                    "title": "Standalone Daylight Sensor & Wired Motion Sensor"
                },
                {
                    "url": "/static/image/video/4.mp4",
                    "defaultPic": "/static/image/video/4.png",
                    "title": "Individual & Group Motion Sensor Control Effect"
                },
                {
                    "url": "/static/image/video/5.mp4",
                    "defaultPic": "/static/image/video/5.png",
                    "title": "Group Motion Sensor Control Effect"
                }
            ],
        }
    }
    render() {
        return (
            <div className={less.wrap} >
                <ul className={less.videos_ul}>
                    {this.state.videosPaths.map((item, i) => {
                        return (<li key={i}>
                            <video width='200' height="200" poster={item.defaultPic} src={item.url} controls></video>
                            <p>{item.title}</p>
                        </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
