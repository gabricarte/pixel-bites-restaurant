import React from 'react';
import './dialogueBox.css';

function DialogueBox(props) {

  return (
    <div className='dialogue-box'>
       {props.children}
    </div>
  )
}

export default DialogueBox