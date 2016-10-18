// var component = require('./component.js');
//
// component();

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
  render(){
    return (
      <h1>fjskaljdla你好</h1>
    )
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
