import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import df09 from '../assets/DF-09.png'
import df11 from '../assets/DF-11.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import df from '../assets/Df_Logo_2.png';

const Container = styled.div`
    height:100px;
    background-color: #1D1D1B;
    flex-direction: row;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;

    
`
const Item = styled.span`
    font-size: 24px;
    cursor: pointer;
    color: #e3e3e3;
    margin-left: 40px;
    /* text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    transition: text-decoration-color 300ms;
    text-decoration-thickness: 0.1rem;
    text-underline-offset: 5px; */
    
`

const Center = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
`
const Logo = styled.img`
    width: 80px;
    height: 80px;
    display: flex;
    align-items:center;
`

const Right = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
`

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`;
const MenuItem = styled.div`
    font-size: 24px;
    /* width: 114px; */
    cursor: pointer;
    margin-right: 80px;
    color: #e3e3e3;

`;

const MenuLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const MenuLogo = styled.div`
    cursor: pointer;
    margin-left: 20px;
    color: #e3e3e3;
    width: 50px;
    align-items: center;
`;
const ProfileIcon = styled.img`
    width: 40px;
    height: 40px;
`;

const ShoppingBag = styled.img`
    width: 40px;
    height: 40px;
`;

//REVISAR IMPLEMENTACIÓN
const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom:3px solid #fff;
    }
    &:hover {
        border-bottom:2px solid #fff;
        
    }
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Item>
                    <NavLink to="/">INICIO</NavLink>
                </Item>
                <Item>
                    <NavLink to="/envios-y-politicas" >ENVÍOS Y POLITICAS</NavLink>
                </Item>
            </Left>
            <Center>
                <Logo src={df}/>
            </Center>
            <Right>
                <MenuContainer>
                    <MenuItem>
                        <NavLink to="/tienda" >TIENDA</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to="/a-pedido">APEDIDO</NavLink> 
                    </MenuItem>
                    </MenuContainer>
                <MenuLogoContainer>
                    <MenuLogo>
                        <a href='/iniciar-sesion'> 
                            <ProfileIcon src={df09} />
                        </a>
                    </MenuLogo>
                    <MenuLogo>
                        <InstagramIcon style={{fontSize:"40px"}}/>
                    </MenuLogo>
                    <MenuLogo>
                        <ShoppingBag src={df11}/>
                    </MenuLogo>
                </MenuLogoContainer>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default NavBar