import React from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom'
import {AppBar,Toolbar,Typography,IconButton,Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from '../Sidebar'
import AddIcon from '@material-ui/icons/Add';

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
            <IconButton  title="Create post" component={Link} to="/create-post" variant="contained">
            <AddIcon  style={{marginRight:'0.5rem',color:'#fff'}}/>
            </IconButton>
          <span style={{marginLeft:'auto'}}>
            <Button component={Link} to={'/login'} color="secondary" variant="contained" >
             
                  Login
          
              </Button>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
