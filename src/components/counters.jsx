import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    const { onReset , counters , onDelete , onIncrement } = this.props; // 宣告新變數，解構原props值

    return (
      <React.Fragment>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
