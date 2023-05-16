import React from 'react';
import './main-template.css';
import BackgroundVideo from '../../assets/videos/order-background.mp4'
import Waitress from '../../assets/images/waitress.png';
import DialogueBox from '../../components/DialogueBox/DialogueBox';

function MainTemplate(props) {

  return (

    <div className='template-page'>
        
        <video src={BackgroundVideo} autoPlay loop muted/>

      <div className="container">
        <div className="waitress">
            <img src={Waitress}/>
        </div>

        <DialogueBox>
            {props.children}
        </DialogueBox>

      </div>

    </div>
  )
}

export default MainTemplate