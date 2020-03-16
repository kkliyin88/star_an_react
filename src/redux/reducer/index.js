import { object } from "prop-types"

const initState ={
    value:'默认值',
    count:1
}
const reducer = (state=initState,action)=>{
    switch(action.type){
        case 'send_type':
            return Object.assign({},state,action);
            default:
                return state
    }
}
module.exports={reducer};
