import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { ProductsList } from '../data';

const Container = styled.div`
  display: grid;
  margin-right: 20px;

`;




const Products = ({style}) => {

  return (
    <Container style={{gridTemplateColumns:style ? "repeat(3, 1fr)" : "repeat(4, 1fr)", gridTemplateRows: style ? "repeat(3,1fr)" : "repeat(4,1fr)"}}>
        {ProductsList.map((item)=> (
            <Product item={item} key={item.id}/>
        ))}
        
    </Container>
  )
}

export default Products