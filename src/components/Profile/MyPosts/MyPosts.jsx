import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={classes.myPosts}>
      <h2 className={classes.myPosts__header}>My Posts</h2>
      <Post message="124" />
      <Post message='345' />
    </div>
  )
}

export default MyPosts