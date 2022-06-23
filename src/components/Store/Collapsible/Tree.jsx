import React from 'react';
import { useState } from 'react';
import styledComponents from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Container = styledComponents.div`

`;

const UnorderedList = styledComponents.div`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
`;

const List = styledComponents.div`
    padding-left: 10px;
    padding-top: 20px;
    border: 0;
`;

const ListContainer = styledComponents.li`
    display: flex;
    flex-direction: row;
    align-items:center;
`;

const Child = styledComponents.div`
    display: inline;
    &.active {
        transform: rotate(90deg);
    }
`;

const TreeHead = styledComponents.div`
    margin-left: 10px;
    
`;

const Content = styledComponents.ul`
    display: flex;
    flex-direction: column;
`;

const Tree = ({data = []} ) => {
  return (
    <Container>
        <UnorderedList>
            {data.map((item, i) =>(
                <TreeNode node={item} key={i}/>
            ))}
        </UnorderedList>
    </Container>
  )
}
const TreeNode = ({node}) => {
    const [childrenVisible, setChildrenVisible] = useState(false);
    const hasChild = node.children ? true : false;

    return (
        <List>
            <ListContainer onClick={(e) => setChildrenVisible((v) => !v)}>
                {hasChild && (
                    <Child className={`${
                        childrenVisible ? "active" : ""
                      }`}>
                        <ChevronRightIcon/>
                    </Child>
                )}
                <TreeHead  style={{fontSize:"38px"}}>
                      {node.label}
                </TreeHead>
            </ListContainer>
            {   hasChild && childrenVisible && (
            <div>
                <Content >
                    <Tree data={node.children}/>
                </Content>
            </div>)}
        </List>
    )
}
export default Tree