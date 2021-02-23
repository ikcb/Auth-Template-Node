import React from 'react'
import {Header} from '../components'
import {Container,Typography} from '@material-ui/core'
const Post = () => {
    return (
        <div>
        <Header/>
        <Container style={{display:'grid',placeItems:'center',height:'100vh',width:'100vw',gridGap:'0',textAlign:'center'}}>
           <div >
           <Typography variant="h1">Error 404</Typography>
            <Typography variant="h4">Sorry this url doesn't exist 😅</Typography>
           </div>
        </Container>
        </div>
    )
}

export default Post
