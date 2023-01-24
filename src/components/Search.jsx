import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Form = styled.form`
    width: 100vw;
    height: 100px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1d1d1b;

`;

const InputSearch = styled.input`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.274);
    background-color: white;
    border: none;
    color: rgba(0, 0, 0, 0.637);
    padding: 1vmax 2vmax;
    width: 50%;
    outline: none;
    border-radius: 0%;
    font: 300 1.1vmax;
    box-sizing: border-box;

`;

const InputSubmit = styled.input`
    
    border-radius: 0%;
    background-color: #e1251b;
    color: #000;
    padding: 1vmax;
    width: 10%;
    font: 300 1.1vmax;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #000;
        color:#fff
    }
`;

const Search = () => {

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if(keyword.trim()) {
        navigate(`/tienda/${keyword}`);
        setKeyword("");
    } else {
        navigate(`/tienda`)
        setKeyword("");
    }
    
  }

  return (
    <>
        <Form className='searchBox' onSubmit={searchSubmitHandler}>
            <InputSearch
            type="text"
            placeholder="Buscar producto"
            onChange={(e)=>setKeyword(e.target.value)}
            />
            <InputSubmit type="submit" value="Buscar"/>
        </Form>
    </>
  )
}

export default Search