import React from 'react';
import './menu-item.css';

function MenuItem(props) {

  const handleClick= () => {
    const basketItem = {
      title: props.title,
      price: props.price,
      quant: 1
    }

    if(!localStorage.getItem('basket')){
      localStorage.setItem('basket', JSON.stringify([basketItem]));
    } else {  
      let basket = JSON.parse(localStorage.getItem('basket'));

      const itemExists = basket.some(item => item.title === basketItem.title && item.price === basketItem.price);

      if (itemExists) {
        for (let i = 0; i < basket.length; i++) {
          if (basket[i].title === basketItem.title && basket[i].price === basketItem.price) {
            basket[i].quant++;
            break;
          }
        }
      } else {
        basket.push(basketItem);
      }

      localStorage.setItem('basket', JSON.stringify(basket));
      }

      props.onClick(); 
  }
  return (

    <div className='menu-item'>
        <img src={props.img} onClick={handleClick}/>
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
        <h3>{props.quant}</h3>
    </div>
  )
}


export default MenuItem
