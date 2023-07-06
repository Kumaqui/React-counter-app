import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button  className="btn btn-outline-success" 
          onClick={ () => this.props.onIncrement(this.props.counter) }> Increment
          </button>

          <button className="btn btn-outline-danger m-2"
            onClick={ () => this.props.onDelete(this.props.counter.id) }
          >Delete</button>

          <br/>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classList = "badge m-2 badge-";
    classList += this.props.counter.value === 0 ? "warning" : "primary";
    return classList;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
