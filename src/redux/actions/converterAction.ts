export const getCoinName = (name: string, price : number)  => ({
  type: 'GET_COIN_NAME',
  payload: {
    name,
    price,
  }
})




