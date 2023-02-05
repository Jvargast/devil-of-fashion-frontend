import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import df09 from "../assets/DF-09.png";
import df11 from "../assets/shopping-bag-df.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import df from "../assets/Df_Logo_2.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logOut } from "../actions/userActions";
import { useAlert } from "react-alert";
import SidebarProducts from "./SidebarProducts";
/* import ProfileDeploy from "./Store/Header/ProfileDeploy"; */

const Container = styled.nav`
  height: 100px;
  background-color: #000000;
  color: #fff;
  z-index: 10;
  width: 100%;
  position: fixed;
  box-shadow: 0px 5px 10px 0px #7c7b7b;
  overflow: hidden;
  @media (max-width: 1240px) {
    .menu-items li {
      padding: 0;
      a {
        font-size: 16px;
        padding: 0;
      }
      ul {
        li {
          a {
            img {
              width: 20px;
              height: 20px;
            }
            svg {
              width: 20px;
              height: 20px;
            }
          }
          div {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    opacity: 0.95;

    .menu-items {
      padding-top: 100px;
      background: #000000;
      height: 100vh;
      /* max-width: 300px; */
      width: 90%;
      transform: translate(-150%);
      display: flex;
      flex-direction: column;
      margin-left: -40px;
      transition: transform 0.5s ease-in-out;
      box-shadow: 5px 0px 10px 0px #aaa;
      position: fixed;
      align-items: flex-start;
    }
    .menu-items li {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      margin-left: -20px;
      border-bottom: 1px solid #fff;
      padding: 0 40px;
      width: 80%;
      a {
        font-size: 25px;
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* height: 64px; */
  [type="checkbox"],
  .hamburger-lines {
    display: none;
  }

  @media (max-width: 768px) {
    height: 84px;
    display: block;
    position: relative;
    input[type="checkbox"],
    .hamburger-lines {
      display: block;
    }

    input[type="checkbox"] {
      position: absolute;
      display: block;
      height: 32px;
      width: 30px;
      top: 20px;
      left: 20px;
      z-index: 5;
      opacity: 0;
    }
    input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(0);
    }
    input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
      transform: rotate(35deg);
    }
    input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }
    input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
      transform: rotate(-35deg);
    }
    .hamburger-lines {
      display: block;
      height: 23px;
      width: 35px;
      position: absolute;
      top: 34px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .hamburger-lines .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #ffffff;
    }
    .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }
  }

  ul {
    order: 2;
    display: flex;
    align-items: center;
  }

  h1 {
    order: 1;
    font-size: 2.3rem;
    margin-bottom: 0.5rem;
  }
`;

const Item = styled.li`
  list-style: none;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  padding: 1.5rem;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 28px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e1251b;
      transition: color 0.3s ease-in-out;
    }
  }
  &:nth-child(3) {
    padding: 0;
    a {
      img {
        width: 70px;
        height: 70px;
      }
    }
    @media (max-width: 768px) {
      display: none;
      /* display: block; */
      /* top: 30px;
      left: 720px;
      position: absolute;
      border-bottom: 0;
      z-index: 2; */
    }
    @media (max-width: 1240px) {
      a {
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  &:last-child {
    padding: 0;
    margin-left: 0;
    list-style: none;
    ul {
      li {
        list-style: none;
        padding: 0 1rem;

        a {
          img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const MenuLogo = styled.div`
  cursor: pointer;
  color: #e3e3e3;
  width: 100%;
  align-items: center;
`;
const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const ShoppingBag = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 0.5rem;
  filter: invert(100%) sepia(96%) saturate(1%) hue-rotate(51deg)
    brightness(104%) contrast(100%);
  display: flex;
  justify-content: center;
  align-items: center;
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
    border-bottom: 3px solid #fff;
  }
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const DropDownMenu = styled.div`
  position: fixed;
  top: 99px;
  width: 300px;
  right: 20px;
  transform: translateX(-45%);
  padding: 1rem;
  background-color: #1d1d1d;
  border: 1px solid #ccc;
  border-radius: 1px;
  overflow: hidden;
  z-index: 999;
`;

const DropdownItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  /* transition: ; */
  padding: 0.5rem;
  cursor: pointer;
`;

const NavBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleShopping = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    alert.success("Sesión cerrada con éxito");
  };

  return (
    <Container>
      <Wrapper>
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <Item>
            <NavLink to="/">INICIO</NavLink>
          </Item>
          <Item>
            <NavLink to="/envios-y-politicas">ENVÍOS Y POLITICAS</NavLink>
          </Item>
          <Item>
            <a href="/">
              <img src={df} alt="df" />
            </a>
          </Item>
          <Item>
            <NavLink to="/tienda">TIENDA</NavLink>
          </Item>
          <Item>
            <NavLink to="/a-pedido">A PEDIDO</NavLink>
          </Item>
          <Item>
            <ul>
              <li>
                {isAuthenticated ? (
                  <div>
                    <ProfileIcon
                      src={df09}
                      onClick={() => setOpenDropdown(!openDropdown)}
                    />
                    {openDropdown && (
                      <DropDownMenu>
                        <DropdownItem onClick={() => navigate("/cuenta")}>
                          Mi cuenta
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => navigate("/ajustes/perfil")}
                        >
                          Ajustes
                        </DropdownItem>
                        <DropdownItem>Órdenes</DropdownItem>
                        {user.role === "admin" ? (
                          <DropdownItem>Dashboard</DropdownItem>
                        ) : (
                          <></>
                        )}
                        <DropdownItem onClick={handleLogOut}>
                          Cerrar sesión
                        </DropdownItem>
                      </DropDownMenu>
                    )}
                  </div>
                ) : (
                  <a href="/iniciar-sesion">
                    <ProfileIcon src={df09} />
                  </a>
                )}
              </li>
              <li>
                <a href="#insta">
                  <InstagramIcon style={{ fontSize: "40px" }} />
                </a>
              </li>
              <li>
                <MenuLogo>
                  <div style={{position:"relative",}}>
                    <ShoppingBag src={df11} onClick={handleShopping} />
                    <p style={{position:"absolute", top:"-2px", right:"-2px"}}>{cartItems.length===0 ? "":cartItems.length}</p>
                  </div>
                </MenuLogo>
              </li>
            </ul>
          </Item>
        </ul>
      </Wrapper>
      {open ? (
        <SidebarProducts setOpen={setOpen} cartItems={cartItems} />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default NavBar;
