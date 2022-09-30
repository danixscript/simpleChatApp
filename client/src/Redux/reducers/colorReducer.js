import * as actionTypes from "../constants/colorsConstant";

const initialState = {
  color: "royalblue",
 

};

const worders = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.CHANGE_COLOR:
      const add = {
        ...state,
      };
      console.log(action.data)
      add.color = action.data
     

      return add;

    case actionTypes.PRODUCT_FAIL:
      const fail = {
        ...state,
      };

fail.color='royalblue'
    

      return fail;









    default:
      return state

  }
}

export default worders