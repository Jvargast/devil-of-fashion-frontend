import React from 'react';
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

const StoreRoute = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    margin-top:80px;
    margin-left: 50px;
`;

const SingleRoute = styled.div`
    margin-right: 10px;
    color: #e3e3e3;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const IconContainer = styled.div`

`;

const LinkProduct = styled(Link)`
    color: #fff;
    display: flex;
    text-decoration: none;
    cursor: pointer;

`;

const CustomNavbar = ({category, subcategory}) => {
  return (
    <StoreRoute>
            <SingleRoute>
                <LinkProduct to="/">
                    INICIO
                </LinkProduct>
                <IconContainer>
                    <ChevronRightIcon/>
                </IconContainer>
            </SingleRoute>
            <SingleRoute>
                <LinkProduct to="/tienda">
                    TIENDA
                </LinkProduct>
                <IconContainer>
                    <ChevronRightIcon/>
                </IconContainer>
            </SingleRoute>
            <SingleRoute>
                <LinkProduct to="/tienda">
                    {category}
                </LinkProduct>
                <IconContainer>
                    <ChevronRightIcon/>
                </IconContainer>
                </SingleRoute>
            <SingleRoute>
                <LinkProduct to="/tienda">
                    {subcategory}
                </LinkProduct>
                <IconContainer>
                    <ChevronRightIcon/>
                </IconContainer>
                </SingleRoute>
            <SingleRoute>
                JUNJI ITO
                </SingleRoute>
        </StoreRoute>
  )
}

export default CustomNavbar