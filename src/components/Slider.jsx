import styledComponents from "styled-components"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styledComponents.div`
    width: 100%;
    height: 80vh;
    display: flex;
    background-color: #1D1D1B;
    position: relative;
    overflow: hidden;
`
const Arrow = styledComponents.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left: ${props=>props.direction === "left" && "12px"};
    right: ${props=>props.direction === "right" && "12px"};
    margin: auto; 
    cursor: pointer;
    opacity: 0.5;
    z-index: 2
`
const Wrapper = styledComponents.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${ props=>props.slideIndex * -100}vw);

`
const Slide = styledComponents.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
`
const ImgContainer = styledComponents.div`
    height: 100%;
    width: 100%;
    flex: 1;
`

const Image = styledComponents.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`

const InfoContainer = styledComponents.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
const Title = styledComponents.h1`
    font-size: 70px;
    color: #000000;
`

const Button = styledComponents.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    color: #000000;
    cursor: pointer;
    border: none;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 0.1rem;
`

const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  const handleClick = (direction) => {
    if(direction==="left") {
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }
  }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosIcon style={{fontSize:"70px", marginLeft:"20px", color:"fff"}}/>
        </Arrow>
        <Wrapper slideIndex= {slideIndex}>
            {sliderItems.map(item=>(
            <Slide bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Button>VER MÁS</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosIcon style={{fontSize:"70px", color:"fff"}}/>
        </Arrow>
    </Container>
  )
}

export default Slider