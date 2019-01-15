import React from 'react';
import './Keypad.css';
import Key from  './Key';

/*
    "Keypad" is the component area that is housing all the buttons/keys for the calculator.
*/

const keypad = (props) => {
    
    return(
        <div className="keypadArea">
            <Key symbol={"7"} />
            <Key symbol={"8"} />
            <Key symbol={"9"} />
            <Key symbol={"+"} />
        </div>
    );
}

export default keypad;