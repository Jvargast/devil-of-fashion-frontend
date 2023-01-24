import React from "react";
import styled from "styled-components";
import Products from "../../Products";
/* import dwi from "../../../assets/down-icon.svg"; */
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { getProductsSort } from "../../../actions/productActions";
import { useEffect } from "react";

const ItemContainer = styled.div`
  background-color: #1d1d1d;
`;

const FilterContainer = styled.div`
  display: grid;
  //set style
  grid-template-columns: 0fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #1d1d1b;
  color: #e3e3e3;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  transition: transform 0.2s;
`;


const Filters = styled.div`
  padding-top: 40px;

  background-color: #1d1d1d;
  width: 100%;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`;

const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  cursor: pointer;
  color: #fff;

  select {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      :focus {
        outline: none;
      }
    }

  img {
    filter: invert(100%) sepia(13%) saturate(0%) hue-rotate(314deg)
      brightness(101%) contrast(103%);
    margin-right: 3px;
    transform: rotate(180deg);

    &::after {
      transform: rotate(45deg);
    }

    
  }
`;

const Chv = styled.i`
  cursor: pointer;
  transition: ${(props) => (props.completed ? "." : "transform .3s")};
  transform: ${(props) =>
    props.completed ? "rotate(180deg)" : "rotate(0deg)"};
`;


const Items = () => {
  const [visible, setVisible] = useState(true);
  const [limit, setLimit] = useState(9);
  const dispatch = useDispatch();

  const handleVisible = () => {
    setVisible(!visible);
    if (visible) {
      setLimit(12);
    } else {
      setLimit(9);
    }
  };
  const dummyData = [
    "Ordenar por últimos subidos",
    "Ordenar por precio: alto - bajo",
    "Ordenar por precio: bajo - alto"
  ];

  const [optionState, setOptionState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (e) => {
    setOptionState(e.target.value);
  };

  useEffect(()=> {
    if(optionState === "Ordenar por precio: bajo - alto") {
      dispatch(getProductsSort(currentPage, limit, "+price"))
    } else if(optionState === "Ordenar por precio: alto - bajo") {
      dispatch(getProductsSort(currentPage, limit, "-price"))
    } else {
      dispatch(getProductsSort(currentPage, limit, "-createdAt"))
    }
  },[currentPage, dispatch, limit, optionState])

  
  const setCurrentPageNo = (e) => {
    setCurrentPage(e)
  }
  
  return (
    <ItemContainer>
      <Filters>
        <Filter>
          <FilterText onClick={handleVisible}>
            <Chv className="bx bxs-down-arrow" completed={visible}></Chv>
            <span>Mostrar Filtros</span>
          </FilterText>
          <FilterText>
            {/* <img src={dwi} alt="dwi" /> */}
            <select onChange={(e)=>handleChange(e)} value={optionState}>
              {dummyData.map((elemento, index) => (
                <option key={index}>{elemento}</option>
              ))}
            </select>
          </FilterText>
        </Filter>
      </Filters>

      <FilterContainer>
        {visible && (
          <Container>
            <Sidebar/>
          </Container>
        )}
        <Products style={visible} visible={visible} limit={limit} setCurrentPageNo={setCurrentPageNo} currentPage={currentPage}/>
      </FilterContainer>
    </ItemContainer>
  );
};

export default Items;
