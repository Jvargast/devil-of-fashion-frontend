import React, { Component } from "react";
import { Dummy } from "../../../data";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Thumbs from "./Thumbs";

const InfoContainer = styled.div`
  width: 800px;
  padding: 0px 50px;
`;

const ImgWrapper = styled.div`
    /* overflow: hidden; */
`;

const Second = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const FirstImage = styled.div`
  width: 500px;
  height: 450px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;



const Title = styled.h1`
  color: #fff;
  font-size: 60px;
`;
const SubTitle = styled.p`
  color: #fff;
  margin: 20px 0px;
  font-size: 30px;
`;

const Price = styled.span`
  color: #fff;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.div`
  color: #fff;
  font-size: 20px;
`;

const FilterSize = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  width: 120px;
  background-color: #000000;
  border: 0;
  color: #fff;
`;

const FilterSizeOption = styled.option`
  color: #fff;
`;

const AddContainer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-around;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #e1251b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  background-color: #000000;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 170px;
  &:hover {
    background-color: gray;
  }
`;
const BackContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const BackToStore = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  cursor: pointer;
`;

export class ProductsDetails extends Component {
  state = { Dummy ,index:0};

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({index:index});
    /* const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active"; */
  };

  /* componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  } */

  render() {
    const { Dummy,index } = this.state;
    return (
      <>
        {Dummy.map((item, i) => (
          <Second key={i}>
            <ImgWrapper key={item.id}>
              <ImgContainer>
                <FirstImage>
                  <Image src={item.img[index]} alt="first image" />
                </FirstImage>
              </ImgContainer>
              <Thumbs images={item.img} tab={this.handleTab} myRef={this.myRef}/>
            </ImgWrapper>
            <InfoContainer>
              <Title>{item.title}</Title>
              <SubTitle>{item.description}</SubTitle>
              <Price>${item.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Talla</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <RemoveIcon />
                  <Amount> 1</Amount>
                  <AddIcon />
                </AmountContainer>

                <Button>
                  <ShoppingBagIcon />
                  Añadir al carro
                </Button>
                <Button>Comprar ahora</Button>
              </AddContainer>
              <BackContainer>
                <BackToStore>VOLVER A TIENDA</BackToStore>
              </BackContainer>
            </InfoContainer>
          </Second>
        ))}
      </>
    );
  }
}

export default ProductsDetails;
