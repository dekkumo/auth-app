import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUser } from '../../store/slices/userSlice'
import cl from './MainPage.module.scss'
import { auth, db } from '../../firebase'
import MessageItem from '../MessageItem/MessageItem'
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import ChatRoom from '../ChatRoom/ChatRoom'

const MainPage = () => {
  const dispatch = useDispatch()

  const [message, setMessage] = useState([])
  const mesRef = useRef()
  const [messages, setMessages] = useState([])
  const scroll = useRef(null)
  const [users, setUsers] = useState([])

  const messagesRef = collection(db, "messages");
  const usersRef = collection(db, "users")

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy("createdAt"), limit(50))
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = []
      snapshot.forEach(doc => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    })

    return () => unsubscribe()
  }, []);

  useEffect(() => {
    const queryUsers = query(usersRef, orderBy("createdAt"), limit(50))
    const unsubscribe = onSnapshot(queryUsers, (snapshot) => {
      let users = []
      snapshot.forEach(doc => {
        users.push({...doc.data(), id: doc.id})
      })
      setUsers(users)
    })

    return () => unsubscribe()
  }, []);


  const sendMessage = async (e) => {
    e.preventDefault()

    message.forEach(el => {
      if (el.text.trim() === '') {
        alert('Нельзя отправить пустое сообщение')
        return
      }
    })

    const { email, uid } = auth.currentUser;

    const mesObj = {
      text: mesRef.current.value,
      name: email,
      mesId: uid,
      createdAt: serverTimestamp(),
    }

    await addDoc(messagesRef, mesObj)

    mesRef.current.value = ''
    setMessage([...message, mesObj])
  }

  return (
    <>
      <div className={cl.navbar__container}>
        <Link to='/profile'><a className={cl.navbar__link}>Мой профиль</a></Link>
        <ChatRoom />
        <Link to='/posts'><a className={cl.navbar__link}>Посты</a></Link>
        <Link to='/login'><a onClick={() => dispatch(removeUser())} className={cl.navbar__link}>Выйти</a></Link>
      </div>
      <div className='_container'>
        <div className={cl.block_body}>
          <div className={cl.message_box}>
            {
              messages.map(message => (
                <MessageItem
                  // key={message.mesId}
                  message={message}
                />
              ))
            }
          </div>
          <form className={cl.form_message} onSubmit={(e) => sendMessage(e)}>
            <input 
              ref={mesRef}
              className={cl.input_message}
              type="text" 
              placeholder='Сообщение' 
            />
            <button className={cl.button_message}>
              <img src="icons/send.png" alt="" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default MainPage