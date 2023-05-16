import React, { useState } from 'react';
import styled from 'styled-components';

const TextAreaBox = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  height: ${props => props.height}px;
  resize: none;
  margin-bottom: 1em;
  width: ${props => props.width}px;
`;

const DynamicTextArea = ({ placeholder, maxHeight, name}) => {
  const [value, setValue] = useState('');
  const [height, setHeight] = useState(44);
  const textareaRef = React.useRef(null);
  const handleChange = (event) => {
    setValue(event.target.value);
    setHeight(textareaRef.current.scrollHeight);
  };

  return (
    <TextAreaBox
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      height={height > maxHeight ? maxHeight : height}
      maxHeight={maxHeight}
      name={name}
    />
  );
};

export default DynamicTextArea;
