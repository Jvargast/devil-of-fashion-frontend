import React, {useEffect} from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Header from '../components/Store/Header/Header';
import CustomNavbar from '../components/Store/SecondNavbar/CustomNavbar';



//AXIOS FETCH
//import Axios from 'axios';
import ProductsDetails from '../components/Store/ProductDetails/ProductsDetails';

const Container = styled.div`
    background-color: #1D1D1B;
`;


const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    /* display: flex; */
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
        {/* Bar for the product, it changes when the category is display and the product */}
        <CustomNavbar category="POLERAS" subcategory="ANIME"/>
        <Wrapper>
            <ProductsDetails/>
        </Wrapper>
        
        <Footer/>
    </Container>
  )
}

export default Product