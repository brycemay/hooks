import React, { Component } from 'react';


class App extends Component {
  state = {
    count: 0,
    isOn: false,
  };

  componentDidMount() {
    document.title = `You have been clicked ${this.state.count} times`
  }

  componentDidUpdate() {
     document.title = `You have been clicked ${this.state.count} times`
  }


  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    return (
      <>
      <h2>Counter</h2>
        <button onClick={this.incrementCount}>I was Clicked {this.state.count} 
         times </button>
         <h2>Toggle Light</h2>
         <div
           style={{
             height: '50px',
             width: '50px',
             background: this.state.isOn ? "yellow" : "grey",

           }}
           onClick={this.toggleLight}>
         </div>
         </>
    )
  }
}
export default App;
