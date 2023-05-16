import React from 'react';
import styled from 'styled-components';

const TransparentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2vw;
  border-radius: 10px;
  width: ${props => props.Width};
  height: ${props => props.Height};

`;

export default TransparentBox;

//initial heigh: 30vh;

/*  @media screen and (max-width: 680px) {
    max-height: 20%;
  } */