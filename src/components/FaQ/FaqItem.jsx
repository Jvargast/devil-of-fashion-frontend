import React from 'react';
import styledComponents from 'styled-components';
import { FaqQuestions } from '../../data';
import Accordion from './Accordion';

const Container = styledComponents.div`
    margin: 15px;
    padding: 15px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);

    
`;


const FaqItem = () => {
  
  return (
    <Container>
        {FaqQuestions.map((ans, i)=>{

        return (
        <>
            <Accordion key={i} {...ans} />
            
        </>
        )})}
        
    </Container>
  )
}

export default FaqItem