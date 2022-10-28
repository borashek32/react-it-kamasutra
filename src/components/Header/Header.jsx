import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <img src="logo192.png" alt="logo" />  
      </div>
    </header>
  )
}

export default Header