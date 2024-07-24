'use client';

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, Person, Settings, ExitToApp } from '@mui/icons-material';

const drawerWidth = 240;

const SidePanel = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
      style={{ width: open ? drawerWidth : 60, transition: 'width 0.3s', marginTop: 56, background: "red"}}
      PaperProps={{
        style: {
          width: open ? drawerWidth : 60,
          overflowX: 'hidden',
          transition: 'width 0.3s',
        }
      }}
    >
      <List>
        {['Dashboard', 'Profile', 'Settings', 'Logout'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <Dashboard /> : index === 1 ? <Person /> : index === 2 ? <Settings /> : <ExitToApp />}</ListItemIcon>
            <ListItemText primary={text} style={{ display: open ? 'block' : 'none' }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidePanel;
