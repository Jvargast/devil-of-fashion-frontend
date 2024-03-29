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
`;

class ComunasSelect extends Component {
  constructor(props) {
    super(props);

    this.renderOption = this.renderOption.bind(this);
    this.valueChangeHandler = this.valueChangeHandler.bind(this);

    this.state = { value: "" };
  }

  componentDidUpdate(p, s) {
    // if the component updates because the region changed
    // set the value to an empty string
    if (p.comunas.length !== this.props.comunas.length) {
      this.setState({ value: "" });
    }
  }

  renderOption(e, i) {
    return (
      <option key={e.code} value={e.name}>
        {e.name}
      </option>
    );
  }

  // select change handler
  valueChangeHandler(e) {
    const selection = e.target.value;
    // if the value is not an empty string, update the state
    if (selection !== "") {
      this.setState({ value: selection });
    } else {
      this.setState({ value: "" });
    }

    this.props.update(this.props.type, selection);
  }

  render() {
    return (
      <Container className="form-group">
        <label htmlFor="comuna-selector">Comuna</label>
        <select
          className="form-control"
          name="comuna-selector"
          id="comuna-selector"
          onChange={this.valueChangeHandler}
        >
          <option defaultValue value="">
            Seleccione Comuna
          </option>
          {this.props.comunas.map(this.renderOption)}
        </select>
      </Container>
    );
  }
}

export default ComunasSelect;
