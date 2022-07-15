import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 400px;
    transition: all 0.2s ease-in;
    &:hover{
        transform: scale(1.05);
    }

  @media screen and (max-width: 768px) {
   height: 200px;
  }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;

const InstagramItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
    </Container>
  )
}

export default InstagramItem