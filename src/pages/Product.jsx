import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Header from '../components/Store/Header/Header';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CustomNavbar from '../components/Store/SecondNavbar/CustomNavbar';


import {Dummy} from '../data'; 
import product_2 from '../assets/images/products/product_2.JPG';

//AXIOS FETCH
import Axios from 'axios';

const Container = styled.div`
    background-color: #1D1D1B;
`;
//STOREROUTE COMPONENT


const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const FirstImage = styled.div`
    width: 620px;
    height: 500px;
`;

const Image = styled.img`
    width: 620px;
    height: 500px;
    object-fit: cover;
`;

const RestOfImages = styled.div`
    display: flex;
    flex-direction: row;
`;
//20 pixeles menos de image
const Images = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 10px;
    margin-top: 10px;
    object-fit: cover;
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
    cursor:pointer;
`;


const Product = ({product}) => {
  //const [isValid, setIsValid] = useState('false');
  /* const { image } = product;
  const [index, setIndex] = useState(0); */

  useEffect(() => {
   /*  Axios.get(`/api/product/products_by_id?=${productId}&type=single`) */
  }, [])
  

  
  return (
    <Container>
        <NavBar/>
        <Header title="TIENDA"/>
        <CustomNavbar category="POLERAS" subcategory="ANIME"/>
        <Wrapper>
            <ImgContainer>
                <FirstImage>
                    <Image src={product_2} />
                </FirstImage>
                <RestOfImages>
                    {Dummy?.map((item,i)=> (
                        <Images src={item.img} key={i} alt="img"/>
                    ))}
                </RestOfImages>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    POLERA SOUCHI
                </Title>
                <SubTitle>
                    Polera pintada a mano con detalles en vinilo textil
                </SubTitle>
                <Price>
                    $15,990
                </Price>
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

                    <Button><ShoppingBagIcon/>Añadir al carro</Button>
                    <Button>Comprar ahora</Button>
                </AddContainer>
                <BackContainer>
                    <BackToStore>
                        VOLVER A TIENDA
                    </BackToStore>
                </BackContainer>
                
            </InfoContainer>

        </Wrapper>
        
        <Footer/>
    </Container>
  )
}

export default Product