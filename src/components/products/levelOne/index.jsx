import React from 'react';
import { Link } from 'react-router-dom';
import {get} from '../../../axios/index.js';
import less from './index.less'
export default class LevelOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picNum: 0,
            picArr: [],
            basePath: '/static/image/products/levelOne/',
        }
    }
    render() {
        console.log(this.props)
        return (
            <div className={less.wrap}>
                <div className={less.container1}>
                    <section className={less.pic}>
                        <ul >
                            {
                                this.state.picArr.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={`/products/levelTwo/${this.props.match.params.name}/${this.props.match.params.id}`}>
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
            </div>
        );
    }
    componentWillMount(){
        this.operatorData();  
    }
    operatorData(){
        let path = this.state.basePath + this.props.match.params.name+'/imageMsg.json';
        get(path).then((res)=>{
             let arr = [];
            for(let i=0;i<res.picNum;i++){
                arr.push({
               piclink:this.state.basePath + this.props.match.params.name +'/' + (i+1)+'.png',
               routerPath:{path:'/products/levelTwo/'+ this.props.match.params.name +'/' + (i+1)},
               })
            };
            this.setState({
                picNum:res.picNum,
                picArr:arr
            })
        })
    } 
}