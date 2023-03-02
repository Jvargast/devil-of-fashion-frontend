import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  width: 100vw;
  background-color: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  padding: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #000000;
  border-color: #000000;
  border-radius: 5px;
  height: 70px;
  margin-bottom: 20px;
  margin-top: 10px;
  width: 700px;
  color: #fff;
  font-size: 30px;
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  div {
    button {
      padding: 30px 20px;
      border-radius: 50px;
      font-size: 30px;
    }
  }

  p {
    &.errmsg {
      background-color: lightpink;
      color: firebrick;
      font-weight: bold;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
    &.offscreen {
      display: none;
    }
    &.instructions > svg {
      margin-right: 0.25rem;
    }
    &.instructions {
      font-size: 0.75rem;
      border-radius: 0.5rem;
      background: #000;
      color: #fff;
      padding: 0.25rem;
      position: relative;
      bottom: -10px;
    }
    .instructions {
      font-size: 0.75rem;
      border-radius: 0.5rem;
      background: #000;
      color: #fff;
      padding: 0.25rem;
      position: relative;
      bottom: -10px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  color: #fff;
  margin-top: 50px;
`;

export const Label = styled.label`
  font-size: 30px;
  margin-bottom: 10px;
  color: #fff;
  .hide {
    display: none;
  }
  .valid {
    color: limegreen;
    margin-left: 0.25rem;
  }
  .invalid {
    color: red;
    margin-left: 0.25rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
  }
  /* width: 50%;
border: none;
border-color: #000000;
background-color: #000000;
color: #fff;
padding: 30px 20px;
border-radius: 50px;
font-size: 30px; */
`;

export const Redirect = styled.p`
  color: #fff;
  padding-bottom: 10px;
`;

export const RedirectLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid gray;
  color: gray;
`;
