import React from 'react';
import './Key.css';

//Generates a Key with the correct symbol that comes from the input "props".
const key = (props) => {
    return (
        <div className="Key">
            <button id="button" type="button">{props.symbol}</button>
        </div>
    );
}

export default key;