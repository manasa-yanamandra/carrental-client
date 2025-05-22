import { BUY_MOBILE } from "./MobileType"


//State
const initialStock = {
  mobiles: 10,
}

//Reducer
export const mobileReducer = (state = initialStock, action) => {
  switch (action.type) {
    case BUY_MOBILE:
      return {
        mobiles: state.mobiles - 1,
      }
    default:
      return state
  }
}