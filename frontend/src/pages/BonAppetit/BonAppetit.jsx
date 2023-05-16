import React, {useState} from 'react';
import './bon-appetit.css';
import MainTemplate from '../../components/MainTemplate/MainTemplate';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import Button from '../../components/styled/Button/Button';
import { Link } from 'react-router-dom';

function BonAppetit() {

    const [showBtn, setShowBtn] = useState(false);

    const thanks = ['Obrigada por realizar o seu pedido. Irei te servir em breve. Após comer, por favor, nos avalie na próxima página']

  return (

    <div className='bon-appetit'>

        <MainTemplate>
            <div className="content">
            <TypingEffect phrases={thanks} onEnd={()=>{setShowBtn(true)}}/>

            {showBtn && 
             <Link to="/feedback" style={{textDecoration: "none"}}>
             <Button label="Por aqui!"/>
            </Link>
            }
            </div>
        </MainTemplate>

    </div>
  )
}

export default BonAppetit