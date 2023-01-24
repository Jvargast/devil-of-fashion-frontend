import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  /* width: 340px;
  height: 450px; */
  background-color: #000000;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5vmax;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;
const AddtoCart = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 8px;
  height: 100%;

  &:hover ${AddtoCart} {
    opacity: 1;
  }
`;

/* const Circle = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
`;
 */
const Image = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  /* mix-blend-mode: color-burn; */
  z-index: 2;
  object-fit: contain;
`;

const Subtitle = styled.div`
  transition: all 0.5s ease;
  cursor: pointer;
  padding-top: 15px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-top: 5px;
  font-size: 30px;
`;

const Price = styled.p`
  margin-top: 10px;
`;

const Button = styled(Link)`
  background-color: transparent;
  color: #e3e3e3;
  border: 0;
  border-bottom: 2px solid;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: none;
`;



const Product = ({ item }) => {
  return (
    <Container>
        <ImageContainer>
          {/* <Circle /> */}
          <div style={{width:"100%", height:"60%", display:"grid"}}>
            <Image src={item.images[0].url} />
          </div>
          
          <AddtoCart>
            <Subtitle>AÑADIR AL CARRO</Subtitle>
          </AddtoCart>
        </ImageContainer>

        <Info>
          <Title>{item.name} </Title>
          <Price>{item.price} </Price>
          <Button to={`/producto/${item._id}`}>VER MÁS</Button>
        </Info>
    </Container>
  );
};

export default Product;
