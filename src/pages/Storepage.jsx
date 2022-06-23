import React from 'react';
import styledComponent from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Store/Header/Header';
import Items from '../components/Store/Items/Items';


const Container = styledComponent.div`
  margin: 0;
  height:100%;
  
`;


const Storepage = (props) => {
  return (
    <Container>
        <NavBar/>
        <Header title="TIENDA"/>
        <Items/>
        <Footer/>
    </Container>
  )
}

export default Storepage