import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../../hooks/use-auth'
import cl from './MyProfile.module.scss'

const MyProfile = () => {
  const {isAuth, email} = useAuth()
  const [name, setName] = useState('')
  const inputRef = useRef()
  const [image, setImage] = useState()
  const [imageUrl, setImageUrl] = useState()
  const filePicker = useRef(null)

  const saveName = () => {
    const nameValue = inputRef.current.value
    setName(nameValue)
  }

  const fileReader = new FileReader()

  fileReader.onloadend = () => {
    setImageUrl(fileReader.result)
  }

  const saveImg = (e) => {
    // console.log(e.target.files[0])
    let file = e.target.files[0]
    setImage(file)
    fileReader.readAsDataURL(file)
  }

  const handlePick = () => {
    filePicker.current.click() 
  }

  useEffect(() => {
    localStorage.setItem('image', JSON.stringify(imageUrl))
  }, [imageUrl])
  

  console.log(image)

  // let photo = JSON.parse(localStorage.getItem('image'))

  return (
    <div className='_container'>
      <div className={cl.profile__body}>
        <div className={cl.profile__header}>
          <Link to='/mainpage'><a className={cl.link_back}>Назад</a></Link>
        </div>
        <h2 className={cl.info}>Информация обо мне</h2>
        <div className={cl.profile__main}>
          <div className={cl.image__container}>
            <button 
              onClick={handlePick}
              className={cl.button__image}
            >
              Выбрать фото
            </button>
            <input 
              type="file" 
              ref={filePicker}
              onChange={(e) => saveImg(e)} 
              className={cl.hidden}
              accept='image/*, .png, .jpg, .gif, .web'
            />
            <div className={cl.block__image}>
              <img src={imageUrl ? imageUrl : 'img/foto-empty.png'} alt="me" />
            </div>
          </div>
          <div className={cl.info_container}>
            <div className={cl.name__container}>
              <input 
                ref={inputRef}
                onClick={saveName} 
                className={name ? cl.delete : cl.info__name} 
                type="text" 
                placeholder='Введите имя' 
              />
              <div className={name ? cl.info_title : cl.delete}>Имя:</div>
              <div className={cl.myname}>{name}</div>
              {/* <button onClick={saveName} className={name ? cl.delete : cl.name__button} >Сохранить</button> */}
            </div>
            <div className={cl.email__container}>
              <div className={cl.info_title}>Email:</div>
              <div className={cl.info__email}>{email}</div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile