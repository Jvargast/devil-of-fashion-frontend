import React from 'react';
import styled from 'styled-components';


const RestOfImages = styled.div`
  display: flex;
  flex-direction: row;
  width: 520px;
`;

const Images = styled.img`
  width: 160px !important;
  height: 200px !important;
  margin-right: 10px;
  margin-top: 10px;
  object-fit: cover;
  cursor: pointer;
  display: block;
  transition: 0.1s linear;
  opacity: 0.7;
  
  &:active {
    opacity: 1;
    border: 1px solid lightskyblue;
  }
`;
export const Thumbs =({images,tab,myRef})=> {
    return (
        <RestOfImages ref={myRef} className="thumb">
        {images.map((tipos, index) => (
          <Images
            src={tipos.url}
            key={index}
            onClick={()=>tab(index)}
          />
        ))}
      </RestOfImages>
    )
}


export default Thumbs