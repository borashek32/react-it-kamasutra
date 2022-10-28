import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div className={classes.content__img}>
        <img src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg" alt="sea" />
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile