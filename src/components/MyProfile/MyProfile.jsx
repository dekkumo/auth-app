import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../../hooks/use-auth'
import './MyProfile.scss'

const MyProfile = () => {
  const {isAuth, email} = useAuth()
  const [name, setName] = useState('')
  const inputRef = useRef()

  const saveName = () => {
    const nameValue = inputRef.current.value
    setName(nameValue)
  }

  return (
    <div className='wrapper'>
      <div className='_container'>
        <div className="profile__body">
          <div className="profile__header">
            <Link to='/mainpage'><a className='link-back'>Назад</a></Link>
          </div>
          <div className="profile__main">
            <div className="info">Информация обо мне</div>
            <div className="name__container">
              <input 
                ref={inputRef} 
                className={name ? 'delete' : 'info__name'} 
                type="text" 
                placeholder='Введите имя' 
              />
              <div className={name ? 'info-title' : 'delete'}>Имя:</div>
              <div className="myname">{name}</div>
              <button onClick={saveName} className={name ? 'delete' : 'name__button'} >Сохранить</button>
            </div>
            <div className="email__container">
              <div className="info-title">Email:</div>
              <div className='info__email'>{email}</div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile