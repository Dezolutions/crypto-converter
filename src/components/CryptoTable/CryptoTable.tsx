import React from 'react'
import CryptoItem from './CryptoItem';
import tableLogo from '../../tableLogo.svg';
import { Tcoin } from '../../types'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../../redux/actions/coinAction';

const CryptoTable  = () => {
  const dispatch = useDispatch()
  const items : Tcoin[] = useSelector(({ coinReducer }:any) => coinReducer.items)
  
  React.useEffect(() => {
    dispatch(fetchCoins())
    setInterval(() => {
      dispatch(fetchCoins())
    },30 *1000);
    
  },[])

  return (
    <section className="crypto-table">
          <div className="crypto-table__block">
            <div className="field-names">
              <img src={tableLogo} alt="logo"/>
              <p>Name</p>
              <p>FullName</p>
              <p>Price</p>
              <p>Volume24H</p>
            </div>
            <ul>
              {!items.length
                ? 'загрузка'
                : items.map((coin: Tcoin) => {
                  return <CryptoItem  key={coin.name} {...coin} />
                })
              }
            </ul>
          </div>
        </section>
  )
}

export default CryptoTable
