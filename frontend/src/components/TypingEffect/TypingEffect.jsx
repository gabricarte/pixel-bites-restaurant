import { useState, useEffect } from 'react';

function TypingEffect(props) {

  const [text, setText] = useState('');

  const phrases = props.phrases;
  const delay = 80; // delay in milliseconds between each character

  useEffect(() => {

    let currentIndex = 0;
    let currentPhrase = phrases[currentIndex];
    let timeoutId = null;

    function updateText() {

      if (currentIndex < phrases.length) {

        setText(prevText => {

          const nextChar = currentPhrase.charAt(prevText.length);

          if (prevText.length === currentPhrase.length - 1) {
            currentIndex++;
            currentPhrase = phrases[currentIndex % phrases.length];
          }

          return prevText + nextChar;
        });

        timeoutId = setTimeout(updateText, delay);
        
      } else if (props.onEnd) { // executes the onEnd function when all phrases have been displayed
        props.onEnd();
      }
    }

    timeoutId = setTimeout(updateText, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <p>{text}</p>
  );
}

export default TypingEffect;