import React from 'react'
import './basket-item.css'

function BasketItem(prosp) {
  return (

    <div className='basket-item'>
        <p>{props.name}</p>
        <p className="yellow">x{props.quant}</p>
        <p>$20</p>
        <p className="red">x</p>

    
    </div>
  )
}

export default BasketItem