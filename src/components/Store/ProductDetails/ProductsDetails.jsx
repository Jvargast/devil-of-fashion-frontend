import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
/* import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove"; */
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Thumbs from "./Thumbs";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
} from "../../../actions/productActions";
import { useParams } from "react-router-dom";

//Skeleton
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//alerta
import { useAlert } from "react-alert";
import { addItemsToCart } from "../../../actions/cartActions";

const InfoContainer = styled.div`
  width: 60%;
  padding: 0px 50px;
`;

const ImgWrapper = styled.div`
  /* overflow: hidden; */
  width: 40%;
`;

const Second = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FirstImage = styled.div`
  /* width: 500px; */
  height: 100%;
  width: 100vw;
  box-sizing: border-box;
  max-width: 100%;
`;

const Image = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
  display: block;
  max-width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 80px;
`;
const SubTitle = styled.p`
  color: #fff;
  margin: 20px 0px;
  font-size: 45px;
`;

const Price = styled.span`
  color: #fff;
  font-size: 60px;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.div`
  color: #fff;
  font-size: 40px;
`;

const FilterSize = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  width: 120px;
  background-color: #000000;
  border: 0;
  color: #fff;
  font-size: 30px;
`;

const FilterSizeOption = styled.option`
  color: #fff;
`;

const AddContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-right: 2rem;
  column-gap: 3rem;
`;

/* const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const Amount = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #e1251b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`; */

const Button = styled.button`
  background-color: #000000;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #000000;
  display: flex;
  align-items: stretch;
  justify-content: center;
  font-size: 30px;
  padding: 15px 50px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
const BackContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const BackToStore = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
`;

const ProductsDetails = (props) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  //ADD TO CART
  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, 1));
    alert.success("Item agregado éxitosamente")
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProductDetails(id));
  }, [alert, dispatch, error, id]);

  const [index, setIndex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    setIndex(index);
  };

  //Function for decrease or increased product
/*   const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  }; */
  //Skeleton
  const Loader = () => {
    return (
      <SkeletonTheme baseColor="#8e1414" highlightColor="black">
        <Second>
          <ImgWrapper>
            <ImgContainer>
              <FirstImage>
                <Skeleton height={400} style={{ marginBottom: "10px" }} />
              </FirstImage>
            </ImgContainer>
            {product.images && <Skeleton height={200} />}
          </ImgWrapper>
          <InfoContainer>
            <Title>
              <Skeleton />
            </Title>
            <SubTitle>
              <Skeleton />
            </SubTitle>
            <Price>
              <Skeleton />
            </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>{<Skeleton />}</FilterTitle>
              </Filter>
            </FilterContainer>
            <p style={{ color: "white", marginBottom: "10px" }}>
              <Skeleton />
            </p>
            <Skeleton />
            <BackContainer>
              <Skeleton />
            </BackContainer>
          </InfoContainer>
        </Second>
      </SkeletonTheme>
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Second category={product.category} sub={product.subCategory}>
          <ImgWrapper>
            <ImgContainer>
              <FirstImage>
                {product.images && (
                  <Image src={product.images[index].url} alt="first image" />
                )}
              </FirstImage>
            </ImgContainer>
            {product.images && (
              <Thumbs images={product.images} tab={handleTab} myRef={myRef} />
            )}
          </ImgWrapper>
          <InfoContainer>
            <Title>{product.name}</Title>
            <SubTitle>{product.description}</SubTitle>
            <Price>${product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Talla</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <p style={{ color: "white", marginBottom: "10px" }}>
              Estado:
              {product.stock < 1 ? (
                <b style={{ color: "red" }}>&nbsp;Sin stock</b>
              ) : (
                <b style={{ color: "green" }}>&nbsp;En stock</b>
              )}
            </p>
            <AddContainer>
              {/* <AmountContainer>
                <button onClick={decreaseQuantity}>
                  <RemoveIcon />
                </button>
                <Amount type="number" value={quantity} readOnly />
                <button onClick={increaseQuantity}>
                  <AddIcon />
                </button>
              </AmountContainer> */}

              <Button onClick={addToCartHandler}>
                <ShoppingBagIcon />
                Añadir al carro
              </Button>
              <Button>Comprar ahora</Button>
            </AddContainer>
            <BackContainer>
              <BackToStore>VOLVER A TIENDA</BackToStore>
            </BackContainer>
          </InfoContainer>
        </Second>
      )}
    </>
  );
};

export default ProductsDetails;
