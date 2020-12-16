import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are No tags to show.</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()} //used when passing parameters. pass the parameter inside the ()
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "danger" : "primary";
    return classes;
  }

  formatCount() {
    let value1;
    const { value } = this.state;
    if (value === 0) {
      value1 = <h2>Zero</h2>;
    } else {
      value1 = value;
    }
    return value1;
  }
}

export default Counter;
