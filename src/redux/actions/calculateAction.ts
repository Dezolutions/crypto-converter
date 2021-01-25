export const onSetValue = (name:string ,value:string) => ({
  type: 'SET_VALUE',
  payload: {
    name,
    value
  }
})

export const onSetPrices = (inPrice : number,outPrice: number) => ({
  type: 'SET_PRICES',
  payload : {
    in: inPrice,
    out: outPrice
  }
})

