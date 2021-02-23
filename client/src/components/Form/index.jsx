import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import {TextField,IconButton,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      display:'flex',
      placeItems:'center',
    },
    input:{
        color:"white"
    },
    btn :{
      margin:"auto 2rem"
    },
    icons:{
      margin:"auto 3rem auto 0.5rem"
    }
  }));

  
  export default function Form(){
   
    const styles=useStyles()


    return <form className={styles.root}>
        <TextField
          required
          id="standard-username-input"
          label="username"
          type="text"
          InputProps={{
              className:styles.input
          }}
          autoComplete="current-username"
        />
        <TextField
          required
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          InputProps={{
            className:styles.input
        }}
        />

        <Button type="submit" variant="contained" color="secondary" className={styles.btn}>
            Login
        </Button>
        <div className={styles.icons}>
        <IconButton>
            <GitHubIcon />
        </IconButton>
        <IconButton>
            <LinkedInIcon />
        </IconButton>
        <IconButton>
            <TwitterIcon />
        </IconButton>
        </div>
    </form>
}