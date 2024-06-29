import { BUY_ICE_CREAM } from "./iceCreameActions"

const initialState = {
  noOfIceCreams: 20
}

const iceCreamesReducer = (state = initialState, action) => {
  switch(action.type){
    case BUY_ICE_CREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1
      }
    default:
      return state
  }
}

export default iceCreamesReducer