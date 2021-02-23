import React from 'react';
import useStyles from './styles';
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from '../Sidebar'

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
                <SideBar icon={<MenuIcon />} />
           
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hackathon
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
