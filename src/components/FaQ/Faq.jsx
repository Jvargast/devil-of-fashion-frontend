import React from 'react';
import styledComponents from 'styled-components';
import FaqItem from './FaqItem';



const Container = styledComponents.div`
    box-sizing: border-box;
`;
const Title = styledComponents.h1`
    font-size: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
    color: #fff;
`;

const Faqs = styledComponents.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 10px;
`;

const Faq = () => {
  
  return (
    <Container>
        <Title>PREGUNTAS FRECUENTES</Title>
        <Faqs>
          <FaqItem />
        </Faqs>
        
    </Container>
  )
}

export default Faq