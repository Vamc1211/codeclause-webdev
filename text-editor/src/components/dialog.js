import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



export default function AlertDialogSlide({open,onClose,onSave}) {
  const [fileName,setFileName]=useState("");
  const handleChange=(e)=>{
    setFileName(e.target.value);
  }
  const handleSave=()=>{
    onSave(fileName);
    setFileName("");
  }
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Save As:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="FileName"
            fullWidth
            value={fileName}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
