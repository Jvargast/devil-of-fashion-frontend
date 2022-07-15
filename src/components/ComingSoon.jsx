import React, { Component } from 'react'
import styled from 'styled-components';
import Countdown from './Countdown/Countdown'


const Container = styled.div`
    width: 100%;
    /* height: 50vh; */
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 100px auto 50px auto 100px auto;
    grid-template-areas:
    "title"    
    "countdown"
    "description";
    align-items: center;
    background-color: #1D1D1B;
    color: #e3e3e3;
    
`;

const Title = styled.h1`
    font-size: 60px;
    grid-area: title;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`;

const Subtitle = styled.h2`
    margin-top: 40px;
    border-bottom: 2px solid #e3e3e3; 
    
`;

export default class ComingSoon extends Component {

  state = {
      countdown: {
          futureDate: "2022-10-31 00:00:00"
      }
  }
  render() {
    const {
        countdown
    } = this.state;

    return (
        <Container>
            <Title>PRÓXIMO STOCK</Title>
            <Countdown futureDate={countdown.futureDate}></Countdown>
            <Subtitle>Recordarme</Subtitle>
        </Container>
        
    )
  }
}
