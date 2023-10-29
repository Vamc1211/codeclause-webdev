import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import '../App.css';


function Box({onDataChange}){
    const [text,setText]=useState('');
    function updateText(e){
        setText(e.target.value);
        onDataChange(e.target.value);
    }

    return(
        <div>
        <textarea
        value={text}
        onChange={updateText}
        rows='23'
        cols='90'
        >
        </textarea>
        </div>
    )
}

export default Box;