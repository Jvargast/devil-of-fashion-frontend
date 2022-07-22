import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { ProductsList } from "../data";

//Redux implement
import { getProduct } from "../actions/productActions";
import { useDispatch, seSelector, useSelector } from "react-redux";
import { useEffect } from "react";

const Container = styled.div`
  display: grid;
  margin-right: 20px;
`;

const Products = ({ style }) => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <Container
          style={{
            gridTemplateColumns: style ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
            gridTemplateRows: style ? "repeat(3,1fr)" : "repeat(4,1fr)",
          }}
        >
          {products &&
            products.map((item, i) => <Product item={item} key={i} />)}
        </Container>
      )}
    </>
  );
};

export default Products;
