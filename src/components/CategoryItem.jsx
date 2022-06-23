
import styledComponents from "styled-components";

const Container = styledComponents.div`
    flex: 1;
    margin: 10px;
    height: 50vh;
    position: relative;

    &:nth-child(5) {
        grid-column-start: 2;
        grid-column-end: 4;
    }
    transition: all 0.2s ease-in;
    &:hover{
        transform: scale(1.05);
    }
`
const Image = styledComponents.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
   
`
const Info = styledComponents.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styledComponents.h1`
    margin-bottom: 20px;
    font-size: 62px;
`
const SubTitle = styledComponents.p`
    color: #fff;
    font-size: 40px;
    opacity: 0.96;
`;


const CategoryItem = ({item}) => {



  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title style={{color:item.color}}>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
        </Info>
    </Container>
  )
}

export default CategoryItem