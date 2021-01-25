import { TSelectedCoin } from "../../types"

const initialState : TSelectedCoin = {
    name: '',
    price: 0,
}

const coinName = (state = initialState, action : any) => {
  switch(action.type) {
    case 'GET_COIN_NAME':
      return {
        ...state,
        name: action.payload.name,
        price: action.payload.price,
      }
    default:
      return state;
  }
}

export default coinName;