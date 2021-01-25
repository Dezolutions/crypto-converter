import axios from 'axios'
import { Tcoin } from '../../types'

export const fetchCoins = () => (dispatch: any) => {
  axios
    .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
    .then(({data}) => {
      const coins :Tcoin[] = data.Data.map((coin: any) => {
        const obj :Tcoin = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(3),
          volume: parseInt(coin.RAW.USD.VOLUME24HOUR)
        }
        return obj;
      })
      dispatch(setCoins(coins))
    })
}

export const setCoins = (items: Tcoin[]) => ({
  type: 'SET_COINS',
  payload: items
})