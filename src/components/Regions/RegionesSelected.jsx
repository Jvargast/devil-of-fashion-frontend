import React from 'react';
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
  margin-bottom: 1rem;
`;



const RegionesSelected = (props) => {
  const valueChangeHandler =(e) => {
    const selection = e.target.value;
    const selectedRegion =
      selection !== "" ? props.regiones[selection].region : "";
      props.setCountry({value: selectedRegion});
      props.updateHandler(props.type, selection)
  };

  const renderRegiones = (e,i) => {
    return (
        <option key={e.region_number} value={i}>
        {e.region}
      </option>
    );
  };
  return (
    <Container>
        <label htmlFor="region-selector">Región</label>
        <select
          className="form-control"
          name="region-selector"
          id="region-selector"
          onChange={valueChangeHandler}
        >
          <option defaultValue value="">
            Seleccione Región
          </option>
          {props.regiones.map(renderRegiones)}
        </select>
    </Container>
  )
}

export default RegionesSelected