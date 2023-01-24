import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getFilteredProducts } from "../../../actions/productActions";
/* import { getProductCategory } from "../../../actions/productActions"; */

const Container = styled.div`
  padding: 0.4em;
  transition: 0.3s;
  display: block;

  &:hover {
    background-color: #ffffff21;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 2.5em;
  align-items: center;
`;

const Chv = styled.i`
  cursor: pointer;
  font-size: 0.6em;
  margin-right: 8px;
  transition: ${(props) => (props.completed ? "." : "transform .3s")};
  transform: ${(props) =>
    props.completed ? "rotate(180deg)" : "rotate(0deg)"};
`;

const Content = styled.div`
  padding-top: 0.25em;
  height: ${(props) => (props.completed ? "auto" : "0")};
  overflow: hidden;
`;

export const LinkS = styled(Link)`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  color: #fff;
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: #fff;
`;

export default function SidebarItems({ item }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  
  const handleOpen = () => {
    setOpen(!open);
  };
  /* const filteredProducts = () => {
    dispatch(getFilteredProducts(1,9,item.title, item.path));
  } */

  return (
    <>
      {item.childrens ? (
        <>
          <Container>
            <Title>
              <Chv
                className="bx bxs-down-arrow"
                completed={open}
                onClick={handleOpen}
              ></Chv>
              <span >{item.title}</span>
            </Title>
            <Content completed={open}>
              {item.childrens.map((child, index) => (
                <SidebarItems key={index} item={child} />
              ))}
            </Content>
          </Container>
        </>
      ) : (
        <StyledButton onClick={()=> dispatch(getFilteredProducts(1,9,item.path))}>
          <Container>
            <Title style={{fontSize:"2em"}}>
              <span>{item.title}</span>
            </Title>
          </Container>
        </StyledButton>
      )}
    </>
  );
}
