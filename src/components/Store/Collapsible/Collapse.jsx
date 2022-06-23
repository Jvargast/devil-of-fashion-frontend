import React, {useState} from 'react';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
`;

const ListaOrdenada = styled.li`
    padding: 0.75rem 1.25rem;
    border: 0;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
`;

const Toggle = styled.div`
    transform: rotate(180deg);
    &.active {
        transform: rotate(240deg);
    }
`;

const Content = styled.div`
    margin-left: 10px;
`;
const Collapse = ({data} = []) => {
  return (
    <Container>
        <List>
            {data.map((item)=>(
                <Node node={item}/>
            ))}
        </List>
    </Container>
  )
}

const Node = ({node}) => {
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = node.children ? true : false;

    return(
        <ListaOrdenada>
            <Flex onClick={(e) => setChildVisiblity((v) => !v)}>
                {hasChild && (
                    <Toggle className={`d-inline d-tree-toggler ${
                        childVisible ? "active" : ""
                      }`}>
                        <ChangeHistoryIcon style={{marginLeft:'10px'}}/>

                    </Toggle>
                )}
                <div className="col d-tree-head">
                        {node.label}
                </div>
            </Flex>
            {hasChild && childVisible && (
            <Content >
                <ul>
                    <Collapse data={node.children} />
                </ul>
            </Content>
            )}
        </ListaOrdenada>
    )
}

export default Collapse