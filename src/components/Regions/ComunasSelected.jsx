import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 30px;
    margin-bottom: 1rem;
  }
  select {
    background-color: black;
    color: inherit;
    font-size: 25px;
    border: none;
    border-radius: 10px;
    padding: 1rem 2rem;
  }
`;

const ComunasSelected = (props) => {

  const renderOption = (e, i) => {
    return (
      <option key={e.code} value={e.name}>
        {e.name}
      </option>
    );
  };

/*   useEffect(()=> {
    props.setCountry({value:""})
  },[props]) */

  const valueChangeHandler = (e) => {
    const selection = e.target.value;
    // if the value is not an empty string, update the state
    if (selection !== "") {
      props.setCountry({ value: selection });
    } else {
      props.setCountry({ value: "" });
    }

    props.updateHandler(props.type, selection);
  };
  return (
    <Container className="form-group">
      <label htmlFor="comuna-selector">Comuna</label>
      <select
        className="form-control"
        name="comuna-selector"
        id="comuna-selector"
        onChange={valueChangeHandler}
      >
        <option defaultValue value="">
          Seleccione Comuna
        </option>
        {props.comunas.map(renderOption)}
      </select>
    </Container>
  );
};

export default ComunasSelected;
