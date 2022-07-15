import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Df_Logo.jpeg';
import df10 from '../assets/DF-10.png';
import df12 from '../assets/DF-12.png';
import df13 from '../assets/DF-13.png';

const Foot = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    position:relative;
`;
const Container = styled.div`
    display:flex;
    background-color: #000000;
    color: #e3e3e3;
    height: auto;

`;

const Left = styled.div`
    //flex:1;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
`;

const LogoContainer = styled.div`
    width: 270px;
    height: 300px;
    border: 0;

    @media screen and (max-width: 768px){
        width: 100px;
        height: 120px;
    }
`;
const Logo = styled.img`
    height: 100%;
    width: 100%;
    border: 0;
    object-fit: cover;
`;

const Items = styled.div`
    display: flex;
    flex:direction row;
    margin-bottom: 20px;
    

`;

const Title = styled.h3`
    font-size: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
    
`;

const ItemContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    margin-right: 120px;

    @media screen and (max-width: 768px){
        margin-right: 10px;
    }
`;

const ItemCategory = styled.li`
    margin-bottom: 12px;
    cursor:pointer;
    width: 100%;

    &:hover {
        border-bottom: 1px solid gray;
    }
`;

const Right = styled.div`
    //flex:1;
    width: 60%;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    display: flex;
    align-items: center;
    align-content: space-between;
`;

const SocialContainer =  styled.div`
    display: flex;
    width: 619px;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    margin-bottom: -60px;

    @media screen and (max-width: 768px){
        width: 100px;
        margin-bottom: 0px;
    }
`;

const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    cursor: pointer;
`;

const IconImage = styled.img`
    width: 40px;
    height: 40px;
    
`;

const Made = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #1D1D1B;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Copyright = styled.div`
    flex: 1;
    margin-left: 20px;
    color: #e3e3e3;
`;

const Web = styled.div`
    flex: 1;
    text-align:right;
    margin-right: 20px;
    color: #e3e3e3;
`;

const Footer = () => {
  return (
      <Foot>
        <Container>
            <Left>
                <LogoContainer>
                    <Logo src={logo}></Logo>
                </LogoContainer>
                
            </Left>
            
            <Right>
                <Items>
                    <ItemContainer>
                        <Title>
                        TIENDA
                        </Title>
                        <ItemCategory>
                        Polerones
                        </ItemCategory>
                        <ItemCategory>
                        Poleras
                        </ItemCategory>
                        <ItemCategory>
                        A pedido
                        </ItemCategory>
                        <ItemCategory>
                        Totebag
                        </ItemCategory>
                    </ItemContainer>
                    <ItemContainer>
                        <Title>
                        INFORMACIÓN
                        </Title>
                        <ItemCategory>
                            Envíos y políticas
                        </ItemCategory>
                        <ItemCategory>
                            Lavado de prendas
                        </ItemCategory>
                        <ItemCategory>
                            Medios de pago
                        </ItemCategory>
                        <ItemCategory>
                            Preguntas frecuentes
                        </ItemCategory>
                    </ItemContainer>
                </Items>
                <SocialContainer>
                    <SocialIcon>
                        <a href="https://www.instagram.com/deviloffashion.store/">
                            <IconImage src={df10}/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <IconImage src={df12}/>
                    </SocialIcon>
                    <SocialIcon>
                        <IconImage src={df13}/>
                    </SocialIcon>
                </SocialContainer>
                
            </Right>
            
        </Container>
        <Made>
            <Copyright>
                Copyright 2022 creada por WOU!CHILE
            </Copyright>
            <Web>
                www.wou!.cl
            </Web>

        </Made>
      </Foot>
    
  )
}

export default Footer