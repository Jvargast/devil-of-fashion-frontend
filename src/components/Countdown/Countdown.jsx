import React, { Component } from 'react';
import styledComponents from 'styled-components';
import moment, {duration}from 'moment';

const Container = styledComponents.div`
    grid-area: countdown;
    display: grid;
    grid-template-columns: repeat(4, minmax(50px, 170px));
    justify-items: center;
    grid-gap: 10px;
    justify-content: center;

    
    
`;

const Segment = styledComponents.section`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    justify-items: center;
    background-color: #000000;
    width: 150px;
    height: 150px;
    align-items: center;
    &:not(:last-child){
        border-right: 2px solid #e1251b;
    }

    @media (max-width: 500px) {
        border-bottom: 5px solid #e1251b;
        &:not(:last-child){
            border-right: 0px;
        }
    }
`;

const Wrapper = styledComponents.div`
    justify-content: center;
    justify-items: center;
`;

const Number = styledComponents.span`
    font-size: 50px;
    transition: all 0.2s ease-in;
    &:hover{
        transform: scale(1.1);
    }
    
`;

const Caption = styledComponents.span`
    display: grid;
    justify-content: center;
    justify-items: center;  
    margin-top: 20px;
    font-size: 20px;
`;

export default class Countdown extends Component {
  state = {
      días:0,
      horas:0,
      minutos:0,
      segundos:0
  };

  addZeros(value) {
      value = String(value);
      while(value.length < 2) {
          value = `0${value}`;
      }
      return value
  }
  
  setCountdown() {
      const futureDate = moment(this.props.futureDate);

      const today = moment();
      
      const clockDuration = duration(futureDate.diff(today));

      const días = Math.floor(clockDuration.asDays());

      const horas = clockDuration.hours();

      const minutos = clockDuration.minutes();

      const segundos = clockDuration.seconds();

      this.setState({
          días,
          horas,
          minutos,
          segundos
          
      });
  }

  componentDidMount() {
      this.setCountdown();
      this.interval = setInterval(()=> {
          this.setCountdown();
      },1000);
  }
  
  componentWillUnmount() {
      clearInterval(this.interval);
  }
  
  render() {
    return (
      <Container>
          {Object.keys(this.state).map((key,i) => (
              <Wrapper>
                  <Segment>
                    <Number>
                      {this.addZeros(this.state[key])}
                    </Number>
                  </Segment>
                  <Caption>
                      {key.toUpperCase()}
                  </Caption>
              </Wrapper>
          ))}
      </Container>
    )
  }
}

