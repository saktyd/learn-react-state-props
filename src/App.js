import React, { Component } from 'react';

import MyButton from './MyButton';
import MyParagraph from './MyParagraph';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sakti Dewantoro',
      text: 'My Name'
    };
  }

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.text} {}
          {this.state.name}
        </h1>
        <MyButton />
        <MyParagraph />
      </div>
    );
  }
}

export default App;
