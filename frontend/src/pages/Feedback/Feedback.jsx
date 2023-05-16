import React from 'react';
import './feedback.css';
import Video from "../../assets/videos/feedback-video.mp4"; 
import TransparentBox from '../../components/styled/TransparentBox/TransparentBox';
import Button from '../../components/styled/Button/Button';
import DynamicInput from '../../components/styled/DynamicInput/DynamicInput';
import axios from 'axios';

function Feedback() {

  const handleSubmit = async (event) => {
    const form = event.target;
    const formData = new FormData(form);
    const url = "https://docs.google.com/forms/d/e/1FAIpQLSfYHmVFgHBo-27j0p5c1ym004LgoXtl2BpoWvSTRB_0Boy7Aw/formResponse";
    await axios.post(url, formData);
    form.reset();
  };
  
  return (
    <div className='feedback'>
      <video src={Video} autoPlay loop muted/>
      <TransparentBox>
        <h1>Me envie sua opinião! </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="first-question">Qual é a sua opinião geral sobre a aplicação?</label>
            <DynamicInput placeholder='Digite aqui' id="first-question" maxHeight={100} name="entry.1884265043"/>
            <label htmlFor="second-question">Que recursos você achou mais úteis ou interessantes na aplicação?</label>
            <DynamicInput placeholder='Digite aqui' id="second-question" maxHeight={100} name="entry.1212348438"/>
            <label htmlFor="third-question">Sugestões ou comentários</label>
            <DynamicInput placeholder='Digite aqui' id="third-question" maxHeight={100} name="entry.513669972"/>
            <Button label="Enviar" Width="10vw" type='submit'/>
        </form>
      </TransparentBox>
    </div>
  );
}

export default Feedback;
