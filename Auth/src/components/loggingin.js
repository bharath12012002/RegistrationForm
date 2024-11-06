import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop(open) {
  // const [open, setOpen] = React.useState(false);
  
  // const handleToggle = () => {
  //   setOpen(true);
  //   setTimeout(() => {
                    
  //     setOpen(false)  
  //   }, 800);
  // };

  return (
    <div>
      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
      <Backdrop
        sx={{  zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}       
      >
       
       <CircularProgress color="inherit" />
        <h1 style={{color:'black'}}> Logging in...</h1>
      </Backdrop>
    </div>
  );
}
