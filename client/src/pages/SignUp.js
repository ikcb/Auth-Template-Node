import React from 'react';
import {Link} from 'react-router-dom'
import {Avatar,Button,CssBaseline,Typography,TextField,Container,Grid,Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        Hackathon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  container:{
    backgroundColor:'#fff',
    borderRadius:'4px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(8, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container} >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate method="POST" >
          <Grid container>
            <Grid item md={6} xs={12}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            type="text"
            label="First Name"
            autoFocus
          />
          </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Last Name"
            type="text"
            id="password"
          />
            </Grid>
          </Grid>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="email"
            type="email"
            id="password"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="password"
            type="email"
            id="password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign up  
          </Button>
          <Grid container>
            <Grid item xs>
        
            </Grid>
            <Grid item>
              <Link to="/login"  > 
              <Typography >  {"Already have an account ? Sign in"} </Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={4} pb={1}>
        <Copyright />
      </Box>
    </Container>
  );
}
