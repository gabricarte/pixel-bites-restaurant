import React from 'react';
import './cat-modal.css';
import CatBackground from '../../assets/images/cat.png';

const CatModal = ({ isOpen, children }) => {
  return (

    <div className={`modal ${isOpen ? 'open' : ''}`}>

    <div className="modal-content">
        <div className="cat">
          <img src={CatBackground} alt="" />
        </div>
        {children}
    </div>

    </div>
  );
}

export default CatModal;