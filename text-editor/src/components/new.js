import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Save from './save';

function New(){

    function handleclick(){

    
    }
    return(
        <div>
        <Button onClick={handleClick}>
            new
        </Button>
        <Save saveData={boxData}></Save>
        </div>

    )
}
export default New;