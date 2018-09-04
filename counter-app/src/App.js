import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    console.log("handle Delete Called", counterId);
    const countersN = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: countersN });
  };

  handleIncrement = counter => {
    console.log("Increment Clicked");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.error("index", index);
    console.warn(counter);
    console.log("counters[index]", counters[index]);
    counters[index] = { ...counter };
    console.log("counters[index]", counters[index]);
    counters[index].value++;
    console.log(counters[index]);
    this.setState({ counters: counters });
    //cloning the array
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
