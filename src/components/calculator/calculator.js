import React, { Component } from 'react';
import Buttons from './buttons';

class Calculator extends Component {
  render() {
    return (
        <div className="calculator">
            <div className="calculator__display">0</div>
  
            <div className="calculator__keys">
                <Buttons />
            </div>
        </div>
    );
  }
}

export default Calculator;