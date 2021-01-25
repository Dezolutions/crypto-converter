import { Tstate, TCoinDiff, Tcoin } from '../../types'
const initialState: Tstate = {
  items: [],
  diffObj: {}
}


const coins = (state = initialState, action:any) => {
  switch(action.type) {
    case 'SET_COINS': {
      state.diffObj = diffCurrencies( state.items, action.payload ).reduce(
        (initObj: TCoinDiff, obj: Tcoin) => {
          const newObj: Tcoin = action.payload.find((o: any) => o.name === obj.name)!
          const oldObj: Tcoin = state.items.find(itemObj => itemObj.name === newObj.name)!
          const color: string =
            newObj.price === oldObj.price ? '' : newObj.price > oldObj.price ? 'Up' : 'Down';
          initObj[newObj.name] = color;
          console.log(initObj)
          return initObj;
        },
        {},
      );
      return {
        ...state,
        items: action.payload
      }
    }
    default:
      return state;
  }
}
function diffCurrencies(arr1: Tcoin[], arr2: Tcoin[]) {
  return arr1.filter((obj, index) => {
    if (obj.price !== arr2[index].price) {
      return true;
    }
    return false;
  });
}
export default coins;