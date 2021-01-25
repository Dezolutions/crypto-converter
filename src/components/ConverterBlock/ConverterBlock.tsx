import React from 'react'
import { connect } from 'react-redux'
import { Tcoin } from '../../types'

const ConverterBlock = (props:any) => {

  const [value,setValue] = React.useState<string>('')
  const [outval,setOutVal] = React.useState<number>(0)
  const [converterValue,setConverterValue] = React.useState<any>(0)
  
  React.useEffect(() => {
    +value > 0? setOutVal(calculate(+value,+converterValue)) : setOutVal(0)
  },[value,converterValue,props.name])
  
  const onSelectedValue = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setConverterValue(e.target.value)
  }

  //функция конвертирования суммы
  const calculate = (val1:number,val2:number) => {
    return val1 * props.price / val2
  }

  const onUpdateField = (e: any) => {
    let validValue = /\W*$/.test(e.target.value)
    if(validValue){
      setValue(e.target.value)
    }
  }

  return (
    <section className="crypto-converter">
      <div className="crypto-converter__block">
        <div className="converter__item">
          <input placeholder="Сумма" value={value} onChange={onUpdateField} className="converter__input" type="text"/>
          <input  readOnly className="converter__currency"  value={props.name} placeholder="pick curr"  name="converter__currency" />  
        </div>
        <div className="converter__item">
          <input readOnly placeholder="Сумма" value={outval.toFixed(3)} className="converter__input" type="text"/>
          <select value={converterValue} onChange={onSelectedValue} className="converter__select" name="converter__select">
            {outval ==  0 ? <option>pick curr</option> : 0}
            {props.items.map((item: Tcoin) => <option key={item.name}  value={item.price} >{item.name}</option>)}
          </select>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state:any) => {
  
  return {
    name: state.converterReducer.name,
    price: state.converterReducer.price,
    items: state.coinReducer.items
  }
}


export default connect(mapStateToProps)(ConverterBlock)
