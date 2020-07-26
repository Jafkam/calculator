import React from "react";
import "./operators.css";

class Operators extends React.Component {
  render() {
    const {
      onClick,
      add,
      subtract,
      divide,
      multiply,
      clear,
      decimal,
      equals,
    } = this.props;

    return (
      <div className="buttons">
        <button
          name="7"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          7
        </button>
        <button
          name="8"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          8
        </button>
        <button
          name="9"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          9
        </button>
        <button name="/" className="function" onClick={divide}>
          /
        </button>

        <button
          name="4"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          4
        </button>
        <button
          name="5"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          5
        </button>
        <button
          name="6"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          6
        </button>
        <button name="*" className="function" onClick={multiply}>
          x
        </button>

        <button
          name="1"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          1
        </button>
        <button
          name="2"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          2
        </button>
        <button
          name="3"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          3
        </button>
        <button name="-" className="function" onClick={subtract}>
          -
        </button>

        <button
          name="0"
          className="number"
          onClick={(e) => onClick(e.target.name)}
        >
          0
        </button>
        <button
          name="."
          className="number"
          onClick={(e) => decimal(e.target.name)}
        >
          .
        </button>
        <button name="=" className="function" onClick={equals}>
          =
        </button>
        <button name="+" className="function" onClick={add}>
          +
        </button>

        <button name="CLEAR" className="clear" onClick={clear}>
          CLEAR
        </button>
      </div>
    );
  }
}

export default Operators;
