import React from 'react';
import styled from 'styled-components';
import df10 from '../../assets/DF-10.png';
import { instagram } from "../../data"; 
import InstagramItem from "./InstagramItem";


const Container = styled.div`
  background-color: #1D1D1B;
  width: 100%;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1440px) {
   
}
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  height: 120px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  color: #fff;

  @media screen and (max-width: 768px) {
   font-size: 40px;
  }
`;

const IconContainer = styled.div`
  margin-left: 20px;
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
`;

const InstagramContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-top: 0px;

    grid-template-columns: repeat(3, 0.5fr);
  }
`;


const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Button = styled.div`
  color: #fff;
  font-size: 30px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 0.1rem;
`;

export default function Instagram() {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>SÍGUENOS EN INSTAGRAM</Title>
          <IconContainer>
            <Icon src={df10}/>
          </IconContainer>
        </TitleContainer>
      </Header>
      <InstagramContainer>
      {instagram.map((item) => (
						
            <InstagramItem item={item} key={item.id}/>
						
					))}
        
      </InstagramContainer>
      <ButtonContainer>
        <Button>
          VER MÁS
        </Button>
      </ButtonContainer>
    </Container>
  )
}
