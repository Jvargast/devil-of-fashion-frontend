import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  background-color: #18181b;
  color: #fff;
  display: flex;
  padding: 0 1rem;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;

  }

`;

const LinkS = styled(NavLink)`
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding: .25rem;
    font-size: 1.3rem;

    &.active {
        color: #e1251b;
        border-bottom: 1px solid #e1251b;
        transition: all ease-in-out 1ms;
    }
`;

const List = styled.li`
    padding: 1rem;
`;


const HeaderProfile = () => {
  return (
    <Nav>
      <ul>
        <List >
          <LinkS to="/ajustes/perfil" >Configuración</LinkS>
        </List>
        <List>
          <LinkS to="/ajustes/seguridad">Seguridad</LinkS>
        </List>
      </ul>
    </Nav>
  );
};

export default HeaderProfile;
