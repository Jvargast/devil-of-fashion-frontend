import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Store/Header/Header";
import CustomNavbar from "../components/Store/SecondNavbar/CustomNavbar";

//AXIOS FETCH
//import Axios from 'axios';
import ProductsDetails from "../components/Store/ProductDetails/ProductsDetails";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../actions/productActions";
import { useParams } from "react-router-dom";

//Skeleton
//Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//alerta
import { useAlert } from "react-alert";

const Container = styled.div`
  background-color: #1d1d1b;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  /* display: flex; */
`;

const Product = () => {
  //const [isValid, setIsValid] = useState('false');
  /* const { image } = product;
  const [index, setIndex] = useState(0); */
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();
  const { id } = useParams();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [alert, dispatch, error, id]);

  return (
    <Container>
        <>
          <Header title="TIENDA" />
          {/* Bar for the product, it changes when the category is display and the product */}
          <CustomNavbar
            category={product.category}
            subcategory={product.subCategory}
            name={product.name}
          />
          <Wrapper>
            <ProductsDetails />
          </Wrapper>
        </>
      <Footer />
    </Container>
  );
};

export default Product;
