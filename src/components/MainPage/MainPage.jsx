import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../../store/slices/userSlice'
import './MainPage.scss'

const MainPage = () => {
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <div className='_container'>
        <div className="header__container">
          <Link to='/profile'><a className='header__link'>Мой профиль</a></Link>
          <Link to='/login'><a onClick={() => dispatch(removeUser())} className='header__link'>Выйти</a></Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage