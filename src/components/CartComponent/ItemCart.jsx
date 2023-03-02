import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { removeItemsFromCart } from "../../actions/cartActions";
import CartItem from "../CartItem";

const Container = styled.div`
  margin-top: 1rem;
  width: 80%;
  padding: 2rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  width: 100%;
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

const Discount = styled.div`
  /* margin-bottom: 1rem;
  margin-left: 1.5rem; */
  padding: 2rem;
  h2 {
    font-size: 40px;
    padding-bottom: 1.5rem;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    input {
      background: #000;
      border-radius: 10px;
      border: none;
      padding: 0.5rem 2rem;
      padding-right: 5rem;
      font-size: 25px;
      color: white;
    }
    button {
      background: #000;
      border-radius: 10px;
      border: none;
      color: inherit;
      font-size: 35px;
      padding: 1.5rem 5.5rem;
    }
  }
`;

const Button = styled.button`
  padding: 2rem 1.5rem;
  font-size: 1.5rem;
  background-color: #000;
  border-radius: 0.5rem;
  border: none;
  color: #fff;
  cursor: pointer;
  :hover {
    color: #ccc;
    background-color: #3c39397d;
  }
`;

const Total = styled.div``;

const ItemCart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  return (
    <Container>
      <Title>RESUMEN DE TU COMPRA</Title>
      <div>
        {cartItems &&
          cartItems.map((item) => (
            <Content key={item.product}>
              <Items>
                <CartItem item={item} deleteCartItems={deleteCartItems} />
              </Items>
            </Content>
          ))}
        <Discount>
          <h2>Cupón de descuento</h2>
          <div>
            <input type="text" placeholder="Escribe aquí ..." />
            <button>APLICAR CUPÓN</button>
          </div>
        </Discount>
        <Total>
          <p
            style={{
              fontSize: "3rem",
              padding: "2rem",
              width: "100%",
              display: "flex",
              /* justifyContent: "flex-end", */
            }}
          >
            Subtotal:{" "}
            <span
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              {`$${cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}`}
            </span>
          </p>
          <p
            style={{
              padding: "2rem",
              width: "100%",
              display: "flex",
              fontSize: "2.5rem",
              color: "gray",
              /* justifyContent: "flex-end", */
            }}
          >
            <span style={{ width: "100%" }}>
              El recargo de envio se realizará en el siguiente paso{" "}
            </span>
            <span
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "flex-end",
                color: "white",
              }}
            >
              {`$${cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              )}`}
            </span>
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
          <Button onClick={()=>navigate("/tienda")}>SEGUIR COMPRANDO</Button>
          <Button onClick={() => navigate("/orden/pago")}>PROCEDER AL PAGO</Button>
        </div>
      </div>
    </Container>
  );
};

export default ItemCart;
