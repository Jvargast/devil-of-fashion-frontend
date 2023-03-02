import React, { Component } from "react";
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

class RegionesSelect extends Component {
  constructor(props) {
    super(props);
    this.renderRegiones = this.renderRegiones.bind(this);
    this.valueChangeHandler = this.valueChangeHandler.bind(this);
    // set the selected state, this indicates the dependent
    // component to change it's visibility
    this.state = { value: "" };
  }

  // select change handler
  valueChangeHandler(e) {
    const selection = e.target.value;
    const selectedRegion =
      selection !== "" ? this.props.regiones[selection].region : "";

    // update the selected region
    this.setState({ value: selectedRegion });

    this.props.update(this.props.type, selection);
  }

  renderRegiones(e, i) {
    return (
      <option key={e.region_number} value={i}>
        {e.region}
      </option>
    );
  }

  render() {
    return (
      <Container className="form-group">
        <label htmlFor="region-selector">Región</label>
        <select
          className="form-control"
          name="region-selector"
          id="region-selector"
          onChange={this.valueChangeHandler}
        >
          <option defaultValue value="">
            Seleccione Región
          </option>
          {this.props.regiones.map(this.renderRegiones)}
        </select>
      </Container>
    );
  }
}

export default RegionesSelect;
