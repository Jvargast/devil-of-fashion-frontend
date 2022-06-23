import styledComponents from "styled-components";
import { categories } from "../data"; 
import CategoryItem from "./CategoryItem";

const Container = styledComponents.div`
    display: grid;
    padding: 20px;
    justify-content:space-around;
    background-color: #1D1D1B;
`;
const CategoryWrapper = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
    grid-gap: 0.1rem;
    

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 3rem;
    }

    @media screen and (max-width: 568px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;




const Categories = () => {
  return (
    <Container>
        <CategoryWrapper>
        {categories.map((item) => (
						
            <CategoryItem item={item} key={item.id} subTitle={item.subTitle}/>
						
					))}
        
        </CategoryWrapper>
        
        
    </Container>
  )
}

export default Categories