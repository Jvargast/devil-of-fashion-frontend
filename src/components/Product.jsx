import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

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
  height: 320px;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 320px;
  padding: 8px;

  &:hover ${AddtoCart} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
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
  const options = {
    edit:false,
    color: "#ded1d1d6",
    activeColor: "tomato",
    value:item.ratings,
    size: window.innerWidth < 600 ? 20: 25,
    isHalf:true
  }
  return (
    <Container>
        <ImageContainer>
          <Circle />
          <div style={{width:"320px", height:"320px"}}>
            <Image src={item.images[0].url} />
          </div>
          
          <AddtoCart>
            <Subtitle>AÑADIR AL CARRO</Subtitle>
          </AddtoCart>
        </ImageContainer>

        <Info>
          <Title>{item.name} </Title>
          <Price>{item.price} </Price>
          <ReactStars {...options}/> 
          <span>{item.numrOfReviews ? item.numrOfReviews: 0} comentarios</span> 
          <Button to={item._id}>VER MÁS</Button>
        </Info>
    </Container>
  );
};

export default Product;
