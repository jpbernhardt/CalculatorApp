import React, { Component } from 'react';
import './calculatorComp.css';
import Display from './Display';
import Keypad from './Keypad';

class calculatorComp extends Component {
    render() {
        return(
            <div className="Calculator">
                <Display />
                <Keypad />
            </div>
        );
    }
}

export default calculatorComp;