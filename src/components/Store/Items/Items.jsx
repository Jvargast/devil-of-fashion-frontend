import React from "react";
import styled from "styled-components";
import Tree from "../Collapsible/Tree";
import Products from "../../Products";
import dwi from "../../../assets/down-icon.svg";
import { useState } from "react";

const ItemContainer = styled.div`
  background-color: #1d1d1d;
`;

const FilterContainer = styled.div`
  display: grid;
  //set style
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #1d1d1b;
  color: #e3e3e3;
`;

const Container = styled.div`
  display: flex;

`;

const FilterWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  color: #e3e3e3;
  cursor: pointer;
  background-color: #1d1d1b;
`;

const Category = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 40px;
  font-size: 24px;
  justify-content: center;
  text-align: center;
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


  img {
    filter: invert(100%) sepia(13%) saturate(0%) hue-rotate(314deg) brightness(101%) contrast(103%);
    margin-right: 3px;
    transform: rotate(180deg);

    &::after {
      transform: rotate(45deg);
    }
    
  }
`;

const Buttons = styled.div`
  grid-area: 5 / 1 / 6 / 4;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const treeData = [
  {
    key: "0",
    label: "POLERAS",
    icon: "fa fa-folder",
    title: "Documents Folder",
    children: [
      {
        key: "0-0",
        label: "ANIME",
        icon: "fa fa-folder",
        title: "Documents Folder",
        children: [
          {
            key: "0-1-1",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-3",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-4",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-5",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-6",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-7",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-8",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-9",
            label: "Tokyo Revengers",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "POLERONES",
    icon: "fa fa-desktop",
    title: "Desktop Folder",
    children: [
      {
        key: "1-0",
        label: "Categoria poleron 1",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
      {
        key: "0-0",
        label: "Categoria poleron 2",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
  },
  {
    key: "2",
    label: "TOTEBAGS",
    icon: "fa fa-download",
    title: "Downloads Folder",
    children: [],
  },
  {
    key: "3",
    label: "A PEDIDO",
    icon: "fa fa-download",
    title: "Downloads Folder",
    children: [],
  },
];

const Items = () => {
  const [visible, setVisible] = useState(true);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <ItemContainer>
      <Filters>
        <Filter>
          <FilterText onClick={handleVisible}>
            <img src={dwi} alt="dwi" />
            Mostrar Filtros
          </FilterText>
          <FilterText>
            <img src={dwi} alt="dwi" />
            Ordenar por más vendidos
          </FilterText>
        </Filter>
      </Filters>

      <FilterContainer >
        {visible && (
          <Container>
            <FilterWithIcon>
              <Category>
                <Tree data={treeData} />
              </Category>
            </FilterWithIcon>
          </Container>
        )}
        <Products style={visible}/>
        <Buttons>{"<1  2 3 4 5 ... >"}</Buttons>
      </FilterContainer>
    </ItemContainer>
  );
};

export default Items;
