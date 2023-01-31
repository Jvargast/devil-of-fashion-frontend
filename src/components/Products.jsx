import React from "react";
import styled from "styled-components";
import Product from "./Product";

//Redux implement
import { clearErrors, getProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useAlert } from "react-alert";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const Container = styled.div`
  display: grid;
  margin-right: 20px;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 6vmax;
  grid-area: 5 / 1 / 6 / 4;

  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .page-item {
    background-color: #000;
    list-style: none;
    border: 1px solid black;
    padding: 1vmax 1.5vmax;
    transition: all 0.3s;
    cursor: pointer;
  }
  .page-item:first-child {
    border-radius: 5px 0 0 5px;
  }

  .page-item:last-child {
    border-radius: 0 5px 5px 0;
  }

  .page-link {
    text-decoration: none;
    color: #e1251b;
    transition: all 0.3s;
  }

  .page-item:hover {
    background-color: white;
  }

  .page-item:hover .page-link {
    color: rgb(80, 80, 80);
  }

  .pageItemActive {
    background-color: white;
  }
`;

const Products = ({ style, visible, limit, setCurrentPageNo, currentPage }) => {
  //Pagination
  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { keyword } = useParams();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, limit));
  }, [alert, currentPage, dispatch, error, keyword, limit]);

  const Loader = () => {
    return (
      <Container
        style={{
          gridTemplateColumns: style ? "repeat(3, 0.4fr)" : "repeat(4, 0.4fr)",
          gridTemplateRows: style ? "" : "",
        }}
      >
        {products &&
          products.map((item, i) => (
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton
                item={item}
                key={i}
                height={320}
                style={{ marginTop: "30px", marginRight:"20px" }}
              />
            </SkeletonTheme>
          ))}
      </Container>
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container
          style={{
            gridTemplateColumns: style
              ? "repeat(3, 0.4fr)"
              : "repeat(4, 0.4fr)",
            gridTemplateRows: style ? "" : "",
          }}
        >
          {products &&
            products.map((item, i) => <Product item={item} key={i} />)}
        </Container>
      )}
      {resultPerPage && (
        <PaginationBox className="">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="Primera"
            lastPageText="Última"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </PaginationBox>
      )}
    </>
  );
};

export default Products;
