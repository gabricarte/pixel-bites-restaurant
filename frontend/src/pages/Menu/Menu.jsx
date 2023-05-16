import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './menu.css';
import axios from 'axios';
import MenuItem from '../../components/MenuItem/MenuItem';
import Click from './../../assets/audios/click-menu.mp3';
import OrderBox from '../../components/OrderBox/OrderBox';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Button from '../../components/styled/Button/Button';
import { v4 as uuidv4 } from 'uuid';

function Menu() {

  const [foods, setFoods] = useState([]);

  const audio = new Audio(Click);

  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || []);

  const thirdPhrase = ['Escolha o que desejar!'];

  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItem = (index) => {
    let updatedBasket = [...basket];
    updatedBasket.splice(index, 1);
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };

  //update component as you click on the food item   
  const handleItemClick = () => {
    audio.play();
    let updatedBasket = JSON.parse(localStorage.getItem('basket'));
    setBasket(updatedBasket);
    updateTotalPrice(basket);
  };

  const renderBasketItems = () => {
    return basket.map((item, index) => (
      <div className="item" key={index}>
        <p>{item.title}</p>
        <p className="yellow">x{item.quant}</p>
        <p>${item.price}</p>
        <p className="red" onClick={() => deleteItem(index)}>x</p>
      </div>
    ));
  };

  const updateTotalPrice = (basket) => {
    let total = 0; 

    basket.forEach(basketItem => {
      total += basketItem.price * basketItem.quant;
    })
    setTotalPrice(total);
  }

    //show items after the component render is finished
    useEffect(() => {
      const basket = JSON.parse(localStorage.getItem('basket')) || [];
      setBasket(basket);
    }, []);  
  

    //update totalPrice everytime basket change
    useEffect(() => {
      updateTotalPrice(basket);
    }, [basket]);

    useEffect(() => {
      axios.get("http://localhost:4000/food")
        .then(response => {
          setFoods(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    const btnOnClick = () => { 

      const name = JSON.parse(localStorage.getItem('customer')).customerName;
      const money = JSON.parse(localStorage.getItem('customer')).customerMoney;
  
      console.log(basket);

      const data = {
        'orderId': uuidv4(),
        'customerName': name, 
        'items': basket,
        'customerMoney': money, 
        'totalPrice': totalPrice
      }
    
      axios.post('http://localhost:4000/orders', data)
      .then(response => {
        console.log(response.status);
        console.log('Successfully registered in the database!')
      })
      .catch(error => {
        console.log(error);
      });

    }

  return (

    <div className='menu-page'>

      <div className="column-one">
        <h1>Menu</h1>
        <div className="menu-container">
          <div className="menu-grid">

            {foods.map((item, index) => {
              return <MenuItem key={index} img={item.imagePath} title={item.foodName} price={item.price} 
              onClick={() => handleItemClick(item)}/>
            })}

          </div>
        </div>
      </div>

      <div className="column-two">
      <OrderBox>
        <TypingEffect phrases={thirdPhrase} />

        <div className="order-items">
           {renderBasketItems()}
       </div>

       <div className="end">
        <p>Total: {totalPrice}</p>

        <Link to="/menu/bon-appetit" style={{ textDecoration: "none" }}> 
            <Button label="Realizar pedido" onClick={btnOnClick}/>
        </Link>

       </div>
  
       </OrderBox>

      </div>
    </div>
  )
}

export default Menu
