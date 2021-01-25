let initialState = {
  value1: '',
  value2: '',
  inPrice: 0,
  outPrice: 0
}

const calculate = (state = initialState,action:any) => {
  switch(action.type) {
    case 'SET_VALUE' :
      return {
        ...state,
        [action.payload.name] : action.payload.value,
        value2:  String((Number(action.payload.value) * state.inPrice) / state.outPrice)
      }
      
    case 'SET_PRICES':
      return {
        ...state,
        inPrice: action.payload.in,
        outPrice: action.payload.out,
      }

    default:
      return state;
  }
}

export default calculate;

