import React from 'react'
import { Link } from 'react-router-dom'
import cl from './HomePage.module.scss'

const HomePage: React.FC = () => {

  return (
    <div className="_container">
      <h1 className={cl.main_title}>Welcome to my project</h1>
      <div className={cl.container_btn}>
        <Link to='/signup'><button className={cl.home_btn}>Регистрация</button></Link> 
        <Link to='/login'><button className={cl.home_btn}>Вход</button></Link>
      </div> 
    </div>
  )
}

export default HomePage