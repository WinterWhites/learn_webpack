import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
  constructor(option) {
    super(option)
    this.state = {
      mes: 'hello react'
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.mes}</h2>
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#app'))