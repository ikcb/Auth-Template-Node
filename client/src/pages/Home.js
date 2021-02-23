import {Header,PostsContainer} from '../components'
import Container from '@material-ui/core/Container'
import React from 'react'

const Home = () => {
    return (
        <div>
            <Header />
           <main>
         <PostsContainer />
               </main>

        </div>
    )
}

export default Home
