import React from 'react';
import styled from 'styled-components';


const RestOfImages = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Images = styled.img`
  width: calc(100% / 3) !important;
  height: 200px !important;
  margin-top: 10px;
  object-fit: cover;
  cursor: pointer;
  display: block;
  transition: 0.1s linear;
  opacity: 0.7;

  :nth-child(3) {
    margin-left: 5px;
  }
  :nth-child(1) {
    margin-right: 5px;
  }
  
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