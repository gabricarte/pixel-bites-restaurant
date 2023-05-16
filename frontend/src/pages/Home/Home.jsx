import React, {useState} from 'react';
import './home.css';
import Video from "../../assets/videos/home-background-video.mp4"; 
import Button from '../../components/styled/Button/Button';
import TypingEffect from '../../components/TypingEffect/TypingEffect';
import {Link} from 'react-router-dom';
import TransparentBox from '../../components/styled/TransparentBox/TransparentBox';

function Home() {

  const [finishedText, setFinishedText] = useState(false);
  const phrases = ['O Pixel Bites é o lugar perfeito para uma experiência gastronômica única.']

  const end = ()=>{
    setFinishedText(true);
  }

  return (

    <div className='home'>
      
      <video src={Video} autoPlay loop muted/>

      <TransparentBox Width="40vw">

        <h1>Bem vindo ao Pixel Bites! </h1>

          <TypingEffect phrases={phrases} onEnd={end}></TypingEffect>
          {finishedText && 
          
          <Link to="/order" style={{textDecoration: "none"}}>
          <Button label="Entrar" Width="10vw"></Button>
          </Link>

          }
          </TransparentBox>

    </div>
  )
}

export default Home