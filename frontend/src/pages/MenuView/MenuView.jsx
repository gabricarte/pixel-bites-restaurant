import React from 'react'
import './menu-view.css';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Button from '../../components/styled/Button/Button';
import {Link} from 'react-router-dom';

function MenuView() {

  const customerData = localStorage.getItem('customer'); //it is a string
  const customer = JSON.parse(customerData);
  const secondText = [`${customer.customerName}, está esperando o que? Realize o seu pedido! `]

  return (
    <div className='menu-view'>
        <MainTemplate>
            <div>
            <TypingEffect phrases={secondText}/>
            <Link to="/menu" style={{ textDecoration: "none" }}>
            <Button label="Cardápio"></Button>
            </Link>
            </div>
        </MainTemplate>

    </div>
  )
}

export default MenuView