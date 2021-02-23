import {Header,PostsContainer} from '../components'
import React from 'react'

const Home = () => {
    return (
        <div>
            <Header />
           <main class="posts">
         <PostsContainer />
               </main>
        </div>
    )
}

export default Home
