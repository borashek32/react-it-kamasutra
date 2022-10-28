import ButtonDefault from '../../../utils/Buttons/ButtonDefault'
import classes from './Post.module.css'
import PostAuthor from './PostAuthor/PostAuthor'

const Post = (props) => {

// console.log(props.message);
// debugger;

  return (
    <div className={classes.post}>
      <PostAuthor />
      <div className={classes.post__content}>
        <h4 className={classes.post__header}>{props.message}</h4>
        <p className={classes.post__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, non quaerat. Labore veritatis voluptatum, ratione dicta veniam modi error ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti...</p>
        <div className={classes.post__buttons}>
          <ButtonDefault />
        </div>
      </div>
    </div>
  )
}

export default Post