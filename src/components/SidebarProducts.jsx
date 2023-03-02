import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { removeItemsFromCart } from "../actions/cartActions";
import { Link, useNavigate } from "react-router-dom";

const ModalContainer = styled.div`
  width: 600px;
  height: 100vh;
  background-color: #000;
  z-index: 300;
  top: 0;
  position: fixed;
  right: 0;
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Items = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Subtitle = styled.h2`
  margin-bottom: 1rem;
  margin-left: 1.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  background-color: gray;
  border-radius: 0.5rem;
  border: none;
  color: #fff;
  cursor: pointer;
  :hover {
    color: #ccc;
    background-color: #3c39397d;
  }
`;

const LinkS = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #3f3c3c;
  font-size: 30px;
  margin-top: 2rem;
  padding: 1rem 3rem;
  cursor: pointer;
  border-radius: 1rem;
`;

const Total = styled.div``;

const SidebarProducts = ({ setOpen, cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/iniciar-sesion?redirect=shipping");
  };

  return (
    <ModalContainer>
      <CloseIcon
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => {
          setOpen(false);
        }}
      />
      {cartItems.length === 0 ? (
        <Content>
          <Items>
            <h1
              style={{
                fontSize: "40px",
                height: "100%",
                display: "flex",
                paddingTop: "24rem",
              }}
            >
              NO TIENES PRODUCTOS
            </h1>
          </Items>
          <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <LinkS to="/tienda">IR A TIENDA</LinkS>
          </div>
        </Content>
      ) : (
        <div>
          {cartItems &&
            cartItems.map((item) => (
              <Content key={item.product}>
                <Items>
                  <CartItem item={item} deleteCartItems={deleteCartItems} />
                </Items>
                <Subtitle>Subtotal: ${item.price * item.quantity}</Subtitle>
              </Content>
            ))}
          <Total>
            <p
              style={{
                marginLeft: "1.5rem",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            >
              Total:{" "}
              {`$${cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}`}
            </p>
          </Total>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <Button onClick={()=>navigate("/carro")}>VER CARRITO</Button>
            <Button onClick={checkoutHandler}>FINALIZAR COMPRA</Button>
          </div>
        </div>
      )}
    </ModalContainer>
  );
};

export default SidebarProducts;
