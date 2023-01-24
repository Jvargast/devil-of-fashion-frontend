import React from 'react';
import styledComponent from 'styled-components';
import Search from '../components/Search';
import Header from '../components/Store/Header/Header';
import Items from '../components/Store/Items/Items';


const Container = styledComponent.div`
  margin: 0;
  height:100%;
  padding-top: 95px;
  
`;


const Storepage = (props) => {
  return (
    <Container>
        <Header title="TIENDA"/>
        <Search/>
        <Items/>
    </Container>
  )
}

export default Storepage