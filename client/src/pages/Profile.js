import React from 'react'
import {Header} from '../components'
import {Container,Paper,makeStyles, Grid, Typography} from '@material-ui/core'



const Profile = () => {
    const useStyles=makeStyles((theme) =>({
        container:{
            position:'absolute',
            top:'15%',
            width:'80%',
            left:'10%',
            backgroundColor:'red'
        },
        card:{
            margin:'auto',
            width:'80%'
        }
    }))

    const styles=useStyles()
    return (
        <>
        <div>
           <Header />
        </div>
        <Container className={styles.container} maxWidth="md">
           
        <Paper className={styles.card} variant="outlined" >
         
                <Grid container  >
                    <Grid item xs={12} md={4} >
                        <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://st2.depositphotos.com/4111759/12123/v/600/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg" alt=""/> 
                    </Grid>
                    <Grid item >
                       <Grid container spacing={2} justify="center" alignItems="center">
                           <Grid item>
                               <Typography variant="h6" md={4}>username: </Typography>
                           </Grid>
                           <Grid item  md={4}> 
                              <Typography variant="h6" >username</Typography>
                           </Grid>
                       </Grid>
                       <Grid container spacing={2} justify="center" alignItems="center">
                           <Grid item>
                               <Typography variant="h6" md={4}>Email: </Typography>
                           </Grid>
                           <Grid item  md={4}> 
                              <Typography variant="h6" >Email</Typography>
                           </Grid>
                       </Grid>
                       <Grid container spacing={2} justify="center" alignItems="center">
                           <Grid item>
                               <Typography variant="h6" md={4}>Email: </Typography>
                           </Grid>
                           <Grid item  md={4}> 
                              <Typography variant="h6" >Email</Typography>
                           </Grid>
                       </Grid>
                    </Grid>
                </Grid>
           
        </Paper>

        </Container>
        </>
    )
}

export default Profile
