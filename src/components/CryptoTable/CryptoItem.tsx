import { Tcoin,TCoinDiff } from '../../types'
import {useDispatch, useSelector} from 'react-redux'
import { getCoinName } from '../../redux/actions/converterAction'


function CryptoItem({name,fullName,price,volume,imageUrl}:Tcoin) {
  const diffObj : TCoinDiff = useSelector(({ coinReducer }:any) => coinReducer.diffObj)
  const dispatch = useDispatch()

  const onClickRow  = (name: string, price: number):void => {
    dispatch(getCoinName(name, price))
  }

  return (
    <li onClick={() => onClickRow(name,price)} className="crypto-item">
      <img src={imageUrl} className="crypto-img" alt="coin icon"/>
      <p className="crypto-name">{name}</p>
      <p className="crypto-fullname">{fullName}</p>
      <p className={diffObj[name] && `price${diffObj[name]}`}>${price}</p>
      <p className="volume-of-day">${volume}</p>
    </li>
  )
}

export default CryptoItem
