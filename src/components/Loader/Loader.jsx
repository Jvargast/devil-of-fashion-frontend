import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: grid;
    place-items: center;
    max-width: 100%;

    div > div {
        width: 10vmax;
        border-bottom: 5px solid rgb(110,110,110);
        height: 10vmax;
        border-radius: 50%;
        animation-name: loadingRotate 800ms linear infinite;
    }
`;

const Loader = () => {
  return (
    <Container>
        <div></div>
    </Container>
  )
}

export default Loader