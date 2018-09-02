// imrc + tab
// cc + tab

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("handle Delete Called", counterId);
    const countersN = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: countersN });
  };

  render() {
    return (
      <div>
        {/* <Counter />
        <Counter />
        <Counter />
        <Counter /> */}

        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            selected={true}
            onDelete={this.handleDelete}
          >
            <h4>Title #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
