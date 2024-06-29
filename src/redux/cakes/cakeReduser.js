import { BUY_CAKE } from "./cakeActions";

const intitialState = {
  noOfCakes: 10
}

const cakeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1
      }
  
    default:
      return state
  }
}

export default cakeReducer