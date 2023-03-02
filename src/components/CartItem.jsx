import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartItemCard = styled.div`
  display: flex;
  align-items: flex-start;
  /* padding: 1vmax; */
  /* height: 8vmax; */
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  div {
    display: flex;
    margin: 0.3vmax 1vmax;
    flex-direction: column;
    width: 70%;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 60px;
    }

    span {
      :nth-child(2) {
        font-size: 30px;
        margin-top: 1.2rem;
      }
      :nth-child(3) {
        font-size: 40px;
        margin-top: 1.2rem;
      }
    }

    div {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      align-items: flex-end;
      padding-right: 1rem;
    }
  }
`;

const Image = styled.div`
  width: 30%;
  img {
    width: 100%;
  }
`;

const Delete = styled.div`
  p {
    cursor: pointer;
    color: gray;
    border-bottom: 1px solid gray;
    padding: 4px;
    font-size: 30px;
  }
`;

const CartItem = ({ item, deleteCartItems }) => {
  return (
    <CartItemCard>
      <Image>
        <img src={item.image} alt="" />
      </Image>

      <div>
        <Link to={`/producto/${item.product}`}>{item.name}</Link>
        {/* <span>Talla: {item.size}</span> */}
        <span>${item.price}</span>
        <Delete>
          <p onClick={()=>deleteCartItems(item.product)}>Eliminar</p>
        </Delete>
      </div>
    </CartItemCard>
  );
};

export default CartItem;
