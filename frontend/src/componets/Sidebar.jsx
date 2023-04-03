import React from 'react';
import {Typography,Box,Divider,Avatar} from '@mui/material'
import './SideBar.css';


function SideBar(props) {
  const { name, id, phone } = props;

  return (
    <div className="sidebar">
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Employee Details
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            sx={{ width: 50, height: 50, mr: 2 }}
            alt="Avatar"
            src="https://via.placeholder.com/50"
          />
          <Box>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              ID: {id}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Phone Number: {phone}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
      </Box>
    </div>
  );
}

export default SideBar;
