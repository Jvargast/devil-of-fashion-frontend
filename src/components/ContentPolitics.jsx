import React from 'react';
import styledComponents from 'styled-components';

const Container = styledComponents.div`
    padding: 15px;
`;

const List = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const ListItem = styledComponents.li`
    color: #fff;
    font-size: 35px;
`;

const ContentPolitics = ({item}) => {
  return (
    <Container>
        <List>
            <ListItem>
                {item}
            </ListItem>
        </List>
    </Container>
  )
}

export default ContentPolitics