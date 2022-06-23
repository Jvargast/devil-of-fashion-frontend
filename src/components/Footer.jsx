import React from 'react';
import styledComponents from 'styled-components';
import logo from '../assets/Df_Logo.jpeg';
import df10 from '../assets/DF-10.png';
import df12 from '../assets/DF-12.png';
import df13 from '../assets/DF-13.png';

const Foot = styledComponents.div`
    height: 100%;
    width: 100%
    display:flex;
    flex-direction:column;
    position:relative;
`;
const Container = styledComponents.div`
    display:flex;
    background-color: #000000;
    color: #e3e3e3;
    height: auto;

`;

const Left = styledComponents.div`
    flex:1;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoContainer = styledComponents.div`
    width: 270px;
    height: 300px;
    border: 0;
`;
const Logo = styledComponents.img`
    height: 100%;
    width: 100%;
    border: 0;
    object-fit: cover;
`;

const Items = styledComponents.div`
    display: flex;
    flex:direction row;
    margin-bottom: 20px;
    

`;

const Title = styledComponents.h3`
    font-size: 30px;
    margin-bottom: 30px;
    
`;

const ItemContainer = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    margin-right: 120px;
`;

const ItemCategory = styledComponents.li`
    margin-bottom: 12px;
`;

const Right = styledComponents.div`
    flex:1;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    align-content: space-between
`;

const SocialContainer =  styledComponents.div`
    display: flex;
    width: 619px;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    margin-bottom: -60px;
`;

const SocialIcon = styledComponents.div`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

const IconImage = styledComponents.img`
    width: 40px;
    height: 40px;
    
`;

const Made = styledComponents.div`
    display: flex;
    flex-direction: row;
    background-color: #1D1D1B;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Copyright = styledComponents.div`
    flex: 1;
    margin-left: 20px;
    color: #e3e3e3;
`;

const Web = styledComponents.div`
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
                        <IconImage src={df10}/>
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