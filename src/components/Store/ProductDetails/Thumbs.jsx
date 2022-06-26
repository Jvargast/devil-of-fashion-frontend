import React, { Component } from 'react';
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
export class Thumbs extends Component {
  render() {
    const {images, tab, myRef} = this.props;
    return (
        <RestOfImages ref={myRef} className="thumb">
        {images.map((tipos, index) => (
          <Images
            src={tipos}
            key={index}
            onClick={()=>tab(index)}
          />
        ))}
      </RestOfImages>
    )
  }
}

export default Thumbs