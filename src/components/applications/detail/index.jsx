import React from 'react';
import {get} from '../../../axios/index.js';
import less from './index.less';
export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: '/static/image/applications/levelOne/',
            content: ['test','test12323'],
        }
    }
    componentWillMount(){
        this.getContent();
    }
    render() {
        return (
            <div className={less.wrap} >
                <section className={less.left}>
                    <img src={`${this.state.pic}/${this.props.match.params.id}.png`} />
                </section>
                <section className={less.right}>
                    <p className={less.title} style={{ marginBottom: 20, marginTop: -20, fontWeight: 600 }}> Brief Introduction of the Project</p>
                    {
                        this.state.content.map((item, i) => {
                           return (
                            <p key={i} className={i % 2 == 0 ? less.title: less.normalContent}>{item}</p>
                           ) 
                        })
                    }
                </section>
            </div>
        )
    }
    getContent(){
    let textPath = '/static/js/applications/levelOne/'+this.props.match.params.id+'.json'
       get(textPath).then((res)=>{
           this.setState({
            content:res.arr 
           })
           console.log('content',this.state.content)
       })
    }
}