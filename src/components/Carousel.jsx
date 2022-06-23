import React, { useEffect, useState } from 'react';
import styledComponents from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Container = styledComponents.div`
    width: 100%;
    display: flex;
    background-color: #1D1D1B;
    position: relative;
    overflow: hidden;
`;

const Arrow = styledComponents.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    display: flex;
    border-radius: 50%;
    align-items: center;
    left: ${props=>props.direction === "left" && "12px"};
    right: ${props=>props.direction === "right" && "12px"};
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    margin: auto; 
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styledComponents.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;

`;

const Slide = styledComponents.div`
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    position: relative;
`;

const ImgContainer = styledComponents.div`
    height: 100%;
    width: 100%;
    flex: 1;
`;

const Image = styledComponents.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: 1s;
    &.loaded {
        opacity: 1;
    }
`;
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
    margin-top: 120px;
    margin-left: 30px;
`;


const Button = styledComponents.button`
    padding: 10px;
    font-size: 24px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 0.1rem;
    
`;
const Carousel = (props) => {

  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [selectedInfo, setSelectedInfo] = useState(props.info[0]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMarginLeft, setSelectedMarginLeft] = useState("");
  const [selectedMarginTop, setSelectedMarginTop] = useState("");
  
  const [loaded, setLoaded] = useState(false);

  useEffect(()=> {
    if(props.autoPlay) {
        const interval = setInterval(()=> {
            selectNewImage(selectedIndex,props.images, props.info);
        }, 3500);
        return () => clearInterval(interval);
    }
    
  });

  const selectNewImage = (index,images, info, next = true) => {
    setLoaded(false);
    setTimeout(() => {
        const condition = next ? selectedIndex < images.length -1 && info.length -1: selectedIndex > 0;
        const nextIndex =  next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1 && info.length -1;
        setSelectedImage(images[nextIndex]);
        setSelectedInfo(info[nextIndex]);
        setSelectedIndex(nextIndex);
        if (images[nextIndex]==="DF-03.png") {
            setSelectedColor("gray");
            setSelectedMarginLeft("0px");
            setSelectedMarginTop("312px");
        } else if(images[nextIndex]==="DF-02.png"){
            setSelectedColor("white");
            setSelectedMarginLeft("960px");
            setSelectedMarginTop("-200px");
        } else if(images[nextIndex]==="DF-04.png") {
            setSelectedColor("black");
            setSelectedMarginLeft("1007px");
            setSelectedMarginTop("-10px");
        } else {
            setSelectedColor("black");
            setSelectedMarginLeft("0px");
            setSelectedMarginTop("0px");
        }
    }, 500);    
  }
  const previus = () => {
      selectNewImage(selectedIndex, props.images, props.info, false);
  };

  const next = () => {
      selectNewImage(selectedIndex, props.images, props.info);
  };
  


  return (
    <Container>
        <Arrow direction="left" onClick={previus}>
            <ArrowBackIosIcon style={{fontSize:"70px", marginLeft:"20px", color:"fff"}}/>
        </Arrow>
        <Wrapper>
        
            <Slide>
                <ImgContainer>
                    <Image src={require(`../assets/images/${selectedImage}`).default} alt="df" className={loaded ? "loaded" : ""} onLoad={()=> setLoaded(true)} />
                </ImgContainer>
                <InfoContainer>
                    
                    <Button style={{color:selectedColor, marginLeft:selectedMarginLeft, marginTop:selectedMarginTop}}>{selectedInfo}</Button>
                </InfoContainer>
            </Slide>
   
        </Wrapper>
        <Arrow direction="right" onClick={next}>
            <ArrowForwardIosIcon style={{fontSize:"70px", color:"fff"}}/>
        </Arrow>
    </Container>
  )
}

export default Carousel