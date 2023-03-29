import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className='wrapper'>
      <div className="_container">
        <h1 className='main-title'>Welcome to my project</h1>
        <div className="container-btn">
          <Link to='/signup'><button className='home-btn'>Регистрация</button></Link> 
          <Link to='/login'><button className='home-btn'>Вход</button></Link>
        </div> 
      </div>
    </div>
  )
}

export default HomePage