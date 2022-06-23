import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
    flex: 1;
    margin: 10px;
    height: 400px;
    transition: all 0.2s ease-in;
    &:hover{
        transform: scale(1.05);
    }
`;

const Image = styledComponents.img`
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