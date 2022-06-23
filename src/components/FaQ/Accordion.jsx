import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
    margin: 5px;
    padding: 5px;
`;
const Question = styledComponents.h1`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    margin-bottom: 25px;
    transition: all 0.4s ease;
    cursor:pointer;
    margin-top: 25px;
    font-size: 33px;
    
    
`;
/*opacity: 0;
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease-out; */
const Answer = styledComponents.div`
    color: #fff;
    font-size: 33px;

    p {
        margin: 0 auto;
        text-align: left;
        display: inline;
    }
    
`;
const Direct = styledComponents.p`
    text-decoration: none;
`;
const Accordion = ({question, answer,enlace}) => {
  const [visible, setVisible] = useState(false);

  const handleDisplay = () => {
    setVisible(!visible);
  };


  return (
    <Container>
        <Question onClick={handleDisplay}>
                {question}
        </Question>
        <Answer>
            {visible && <p>{answer} <Direct><Link to="/privacy-policy" style={{color:'#fff'}}>{enlace}</Link></Direct></p>}
        </Answer>
    </Container>
  )
}

export default Accordion