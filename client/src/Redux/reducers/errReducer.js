import * as actionTypes from "../constants/loaderConstant.js";

const initialState = {
  err: "",
  iserr: false,

};

const products = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.ERROR:
      const add = {
        ...state,
      };

      return add;

   


    

  







    default:
      return state

  }
}

export default products