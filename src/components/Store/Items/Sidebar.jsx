import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearErrors, getCategories } from "../../../actions/categoryActions";
import SidebarItems from "./SidebarItems";

const RecursiveComponent = ({ data }) => {
  const [showNested, setShowNested] = useState({});
  const toggleNested = (name) => {
    setShowNested({ ...showNested, [name]: !showNested[name] });
  };

  return (
    <div style={{ paddingLeft: "20px" }}>
      {data.map((parent, index) => {
        return (
          <div key={index}>
            
            {/* rendering folders */}
            {!parent.isLast && <button onClick={() => toggleNested(parent.title)}>{parent.title}</button>}
            {/* rendering files */}
            {parent.isLast && <span onClick={()=>console.log(parent.path)}>{parent.title}</span>}

            <div style={{ display: !showNested[parent.title] && "none" }}> 
              {parent.childrens && (
                <RecursiveComponent data={parent.childrens} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Container = styled.div`
  width: 380px;
  flex-shrink: 0;
  background-color: rgba(22, 22, 22, 1);
  height: 100%;
  overflow: auto;
`;

export default function Sidebar() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, categories } = useSelector((state) => state.categories);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getCategories());
  }, [alert, dispatch, error]);

  return (
    <Container>
      {categories.map((item, index) => (
        <SidebarItems key={index} item={item}/>
      ))}
      {/* <RecursiveComponent data={categories} /> */}
    </Container>
  );
}
