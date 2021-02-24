import Header from '../components/Header'
import {FormControl,InputLabel,Input,Grid,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'
export default function CreatePost(){

const useStyles= makeStyles((theme)=>({
    form:{
    position: 'absolute',
    width:'60%',
    height:'40%',
    left:'20%',
    top:'30%'
},
grid:{
    width:'70%',
    margin:` 2rem auto`
},
input:{
    margin:theme.spacing(1,'auto')
},
inputImage:{
    display:'none'
},
submitBtn:{
    marginTop:theme.spacing(8)
}
}))

const styles=useStyles()
let history = useHistory();

const  handleSubmit= async (e)=>  {
    e.preventDefault()
    const formData=new FormData(e.target)

    fetch('http://localhost:5000',{
        method:'POST',
        body:formData
    })
    history.push('/')
}

return (<div>
    
    <Header />
    <form  onSubmit={handleSubmit} className={styles.form} >

    <Grid container className={styles.grid}>

        <Grid item xs={12} className={styles.input}>
    <FormControl fullWidth>
    <InputLabel htmlFor="my-post-title">Post Title</InputLabel>
    <Input name="my-post-title" id="my-post-title" aria-describedby="my-helper-text" fullWidth/>
    </FormControl>
        </Grid>

      
        <Grid item xs={12} className={styles.input}>
    <FormControl fullWidth>
    <InputLabel htmlFor="my-post-content">Post content</InputLabel>
    <Input id="my-post-content" name="my-post-content" multiline aria-describedby="my-helper-text" fullWidth/>
    </FormControl>
        </Grid>

        <input
        accept="image/*"
        className={styles.inputImage}
        id="contained-button-file"
        name="my-post-image"
        multiple
        type="file"
      />

      <label htmlFor="contained-button-file">
        <Button variant="contained" style={{marginTop:'1rem'}} color="primary" component="span">
          Upload image
        </Button>
      </label>

    <Button type="submit" variant="contained" className={styles.submitBtn} color="secondary" fullWidth>
        upload Post
    </Button>
 </Grid>
</form>
</div>)


}