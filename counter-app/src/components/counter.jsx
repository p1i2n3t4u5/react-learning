import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   // above line will bind this to the handleIncrement function
  // }

  style = {
    fontSize: 40,
    fontWeight: "bold"
  };

  // used while we are setting this using constructor approach
  // handleIncrement() {
  //   console.log("Increment Clicked1", this);
  // }

  // arrow function does not need this object  to be set maually by default available
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    console.log("Increment Clicked2", this);
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    console.log("props", this.props);

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} />
        <span>{this.state.count}</span> */}

        {/* <span>{2 + 2}</span> */}

        <div>
          <span style={this.style} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => {
              this.handleIncrement({ id: 1 });
            }}
            className="btn btn-secondary btn-sm "
          >
            Increment
          </button>
        </div>
        {/* {this.state.tags.length === 0 && "please create a new tag"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
