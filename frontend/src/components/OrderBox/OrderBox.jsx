import React from 'react'
import './order-box.css'

function OrderBox(props) {

  return (
    <div className='order-box'>
         {props.children}
    </div>
  )
}

export default OrderBox