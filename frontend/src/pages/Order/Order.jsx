import React, { useState} from 'react'
import './order.css';
import {Link} from 'react-router-dom';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Button from '../../components/styled/Button/Button';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import { inputValidator } from '../../utils/inputValidator';
import CatModal from '../../components/CatModal/CatModal';

function Order() {

    const firstText = ['Olá! Me chamo Mary e irei te auxiliar com o seu pedido! Para começarmos, qual o seu nome?']

    const [modalOpen, setModalOpen] = useState(false);

    const [input, setShowInput] = useState(false);

    const [showBtn, setShowBtn] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const [inputValidatorResult, setInputValidatorResult] = useState({});

    const handleInputChange = (event) => {

      const value = event.target.value;
      const validatorResult = inputValidator(value);
    
      if (!validatorResult.isValid) {
        setModalOpen(true);
        setShowBtn(false);
      } else {
        setModalOpen(false);
        setShowBtn(true);
        setInputValue(value); 
      }
    
      setInputValidatorResult(validatorResult);

    }

    const setToLocalStorage = () => {
      
      const customerData = {
        customerName: inputValue,
        customerMoney: 50
      };
     localStorage.setItem('customer', JSON.stringify(customerData));
    } 

  return (

    <div>

      <MainTemplate>

          <div>
         <div>

           <TypingEffect phrases={firstText} onEnd={()=> {setShowInput(true)}} />

         </div>
            <div className="btns-container">

           {input &&
           <input type="text" onChange={handleInputChange}/>
           }

           { showBtn &&   <Link to="/order/menu-view" style={{ textDecoration: "none" }} onClick={setToLocalStorage}>
            <Button label="Iniciar" maxWidth={8}/>
           </Link>
           }

            </div>

         </div>

         <CatModal isOpen={modalOpen}>
          
          <div>
            <p>{inputValidatorResult.message}</p>
            <Button onClick={() => setModalOpen(false)} label="Ok!"></Button>
          </div> 
          </CatModal>
         
      </MainTemplate>
    </div>

  )
}

export default Order;