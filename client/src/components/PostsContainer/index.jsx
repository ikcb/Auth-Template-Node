import Container from '@material-ui/core/Container'
import useStyles from './styles'
import PostCard from '../PostCard'


export default function PostsContainer(){
    const styles = useStyles()
    return <Container  className={styles.root}  maxWidth="md">
        <PostCard />
        <PostCard />
        <PostCard />
            </Container>
}