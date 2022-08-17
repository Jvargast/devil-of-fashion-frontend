import React from 'react';
import styledComponent from 'styled-components';
import tienda_imagen from '../../../assets/Identificador_1.png';


const Container = styledComponent.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: black;
`;

const ImgContainer = styledComponent.div`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const Img = styledComponent.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styledComponent.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styledComponent.h1`
  font-size: 90px;
  color: #e3e3e3;
`;
const Header = (props) => {
  return (
    <Container>
          <InfoContainer>
            <Title>
              {props.title}
            </Title>
          </InfoContainer>
          <ImgContainer>
            <Img src={tienda_imagen}/>
          </ImgContainer>
        </Container>
  )
}

export default Header