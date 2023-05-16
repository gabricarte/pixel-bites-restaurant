import React from 'react';
import styled from 'styled-components';
import sound from '../../../assets/audios/click.mp3';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #FE2867;
  color: black;
  border: none;
  padding: 0.5em;
  box-shadow: -4px 0 0 0 black,
  4px 0 0 0 black,
  0 -4px 0 0 black,
  0 4px 0 0 black;
  width: fit-content;

  &:hover {
    background-color: #4EB947;
    color: #fff;
  }

`;

function Button(props) { 

  const audio = new Audio(sound);

  const handleClick = (event) => {
    audio.play();
    if (props.onClick){
      props.onClick();
    };

  }
  return (
    <>
      <StyledButton onClick={handleClick} Width={props.Width} type={props.type}>
        {props.label}
      </StyledButton>
    </>
  );
}

export default Button;
