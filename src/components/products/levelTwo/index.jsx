import React from 'react';
import less from './index.less';
import { get } from '../../../axios/index.js';
import { Collapse } from 'antd';
const { Panel } = Collapse;
export default class LevelTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPic: '/static/image/products/levelTwo/',
            basePath: '/static/image/products/levelTwo/',
            baseJsPath: '/static/js/products/levelTwo/',
            imageMsgPath: '',
            content: [],
            smallPicArrNum: 0,
            smallPicArr: [],
            sysPicArr:
                [
                    { pic: '' },
                    { pic: '' },
                ]
        }
    }
    selectPic(i) {
        this.setState({
            mainPic: this.state.smallPicArr[i].pic
        })
    }
    operator(i) {

        //组图
        this.getImageMsg()
        this.setState({
            mainPic: this.state.basePath + this.props.match.params.name + '/' + this.props.match.params.id + '/' + '1.png'
        })


        //参数图
        let sysPicArr = [
            { pic: '' },
            { pic: '' }
        ]
        sysPicArr.map((item, index) => {
            item.pic = this.state.basePath + this.props.match.params.name + '/' + this.props.match.params.id + '/' + 'sys' + '/' + (index + 1) + '.png'
        })
        this.setState({
            sysPicArr: sysPicArr
        })
        //小图
        this.getContent();
    }
    getImageMsg() {  //小图
        let path = this.state.basePath + this.props.match.params.name + '/' + this.props.match.params.id + '/' + 'imageMsg.json'
        get(path).then((res) => {
            this.setState({
                smallPicArrNum: res.picNum
            })
            let smallPicArr = [];
            for (let i = 0; i < res.picNum; i++) {
                smallPicArr.push({ pic: '' })
            };
            smallPicArr.map((item, index) => {
                item.pic = this.state.basePath + this.props.match.params.name + '/' + this.props.match.params.id + '/' + (index + 1) + '.png'
            });
            this.setState({
                smallPicArr: smallPicArr
            })
            console.log('state',this.state)
        })
    }
    getContent() {
        let textpath = this.state.baseJsPath + this.props.match.params.name + '/' + this.props.match.params.id + '/' + 'text.json';
        get(textpath).then((res) => {
            this.setState({
                content: res.arr
            })
        })
    }
    componentWillMount() {
        this.operator();
    }
    render() {
        console.log('props', this.props)
        return (
            <div className={less.wrap}>
                <div className={less.container1}>
                    <section className={less.left}>
                        <div className={less.main_pic}>
                            <img src={this.state.mainPic} />
                        </div>
                        <div className={less.small_pic}>
                            <ul style={{marginTop:10,cursor:'pointer'}}>
                                {
                                    this.state.smallPicArr.map((item, i) => {
                                        return (
                                            <li key={i} className={less.pointer} onClick={()=>this.selectPic(i)}>
                                                {
                                                    item.pic ? <img src={item.pic} /> : null
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                    <section className={less.right}>
                        <Collapse accordion defaultActiveKey="1">
                            <Panel header=" System Diagram" key="1">
                                <div className={less.sysimg}>
                                    <img src={this.state.sysPicArr[0].pic} />
                                </div>
                            </Panel>
                            <Panel header="Features" key="2">
                                <div>
                                    {
                                        this.state.content.map((item, i) => {
                                            return (
                                                <p key={i} className={less.content1} > <span style={{marginRight:15}}>*</span>{item}</p>
                                            )
                                        })
                                    }
                                </div>
                            </Panel>
                            <Panel header="Parameter" key="3">
                                <div className={less.sysimg}>
                                    <img src={this.state.sysPicArr[1].pic} />
                                </div>
                            </Panel>
                            <Panel header="Installation" key="4">
                                <div  >
                                    <p>Please contact us for installation details and specifications</p>
                                </div>
                            </Panel>
                        </Collapse>
                    </section>
                </div>
            </div>
        );
    }
}