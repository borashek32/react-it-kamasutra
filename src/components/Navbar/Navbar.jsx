import classes from './Navbar.module.css'

// let class1 = "item";
// let class2 = "active";
// let cl = class1 + '' + class2;
// let clNew = `${classes.item} ${classes.active}`

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <a className={`${classes.nav__item} ${classes.active}`} href="/profule">Profile</a>
        </li>
        <li className={classes.nav__item}>
          <a className={classes.nav__link} href="/messages">Messages</a>
        </li>
        <li className={classes.nav__item}>
          <a className={classes.nav__link} href="/news">News</a>
        </li>
        <li className={classes.nav__item}>
          <a className={classes.nav__link} href="/music">Music</a>
        </li>
        <li className={classes.nav__item}>
          <a className={classes.nav__link} href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar