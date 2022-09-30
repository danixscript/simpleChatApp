import {CHANGE_COLOR,PRODUCT_FAIL} from '../constants/colorsConstant'
import {ERROR} from '../constants/loaderConstant.js.js'


export const changeColorAction = (data) => async (dispatch)=>{
    try{
     
        dispatch({type:CHANGE_COLOR,data:data})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}
