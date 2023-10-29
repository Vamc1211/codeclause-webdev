import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import {saveAs} from 'file-saver';
import Box from './box.js'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AlertDialogSlide from './dialog.js';
import '../App.css';

function Save({saveData}){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    function handleSave(fileName){
        var blob = new Blob([saveData], {type: "text/plain;charset=utf-8"});
    saveAs(blob, fileName);
    setOpen(false);


    }

    return(
        // <input type='button' onClick={handleclick} name="save"/>
        <div>
        <Button onClick={handleClickOpen} name="save" id ="save">save</Button>
        <AlertDialogSlide 
        open={open}
        onClose={handleClose}
        onSave={handleSave}

        ></AlertDialogSlide>
        </div>
       

    )
}
export default Save;