import { object } from "prop-types"

const initState ={
    value:'默认值'
}
const reducer = (state=initState,action)=>{
    console.log('reduce',state,action);
    switch(action.type){
        case 'send_type':
            return object.assign({},state,action);
            default:
                return state
    }
}
module.exports={reducer};
