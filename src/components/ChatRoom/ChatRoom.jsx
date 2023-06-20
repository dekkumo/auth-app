import React from 'react'
import cl from './ChatRoom.module.scss'
import { getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const ChatRoom = () => {

  return (
    <div className={cl.container_chat}>
      <div className={cl.body_chat}>
        <div className={cl.name_chat}>Никита</div>
      </div>
    </div>
  )
}

export default ChatRoom