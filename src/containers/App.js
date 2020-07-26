import React from "react";
import Operators from "../components/operators/operators";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
      leftSide: "",
      rightSide: "",
      operator: "",
      topDisplay: "0",
    };
  }

  display = (e) => {
    this.setState({ display: this.state.display + e });
  };

  decimal = (e) => {
    let display = this.state.display;
    try {
      if (!display.includes(".")) {
        this.setState({ display: display + e });
      }
    } catch (err) {
      this.setState({ display: "Error" });
    }
  };

  add = () => {
    const leftSide = this.state.display;
    this.setState({ leftSide, display: "", operator: "+" });
    this.topDisplay();
  };

  subtract = () => {
    const leftSide = this.state.display;
    this.setState({ leftSide, display: "", operator: "-" });
    this.topDisplay();
  };

  multiply = () => {
    const leftSide = this.state.display;
    this.setState({ leftSide, display: "", operator: "*" });
    this.topDisplay();
  };

  divide = () => {
    const leftSide = this.state.display;
    this.setState({ leftSide, display: "", operator: "/" });
    this.topDisplay();
  };

  topDisplay = () => {
    this.setState((state) => ({
      topDisplay: state.leftSide + state.operator + state.rightSide,
    }));
  };

  clear = () => {
    this.setState({
      display: "",
      topDisplay: "0",
      leftSide: "",
      rightSide: "",
      operator: "",
    });
  };

  calculate = () => {
    const operator = this.state.operator;
    const leftSide = this.state.leftSide;
    let rightSide = this.state.rightSide;
    rightSide = this.state.display;

    try {
      if (leftSide !== "") {
        if (operator === "+") {
          let result = parseFloat(leftSide) + parseFloat(rightSide);
          this.setState({
            rightSide: rightSide,
            display: result,
          });
        } else if (operator === "-") {
          let result = parseFloat(leftSide) - parseFloat(rightSide);
          this.setState({
            rightSide: rightSide,
            display: result,
          });
        } else if (operator === "*") {
          let result = parseFloat(leftSide) * parseFloat(rightSide);
          this.setState({
            rightSide: rightSide,
            display: result,
          });
        } else if (operator === "/") {
          let result = parseFloat(leftSide) / parseFloat(rightSide);
          this.setState({
            rightSide: rightSide,
            display: result,
          });
        }
      }
    } catch (err) {
      this.setState({ display: "Error" });
    }
    this.topDisplay();
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="container">
          <div className="title">Hi I'm a Calculator</div>
          <div className="displayContainer">
            <div className="topDisplay">{this.state.topDisplay}</div>
            <div className="display">{this.state.display}</div>
          </div>
          <Operators
            onClick={this.display}
            clear={this.clear}
            add={this.add}
            subtract={this.subtract}
            divide={this.divide}
            multiply={this.multiply}
            decimal={this.decimal}
            equals={this.calculate}
          />
        </div>
      </div>
    );
  }
}

export default App;
