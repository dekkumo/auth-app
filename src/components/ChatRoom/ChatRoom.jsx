import React, { useEffect, useState } from 'react'
import cl from './ChatRoom.module.scss'
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const ChatRoom = ({users}) => {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			// console.log(user)
		})
	}, [])

  const handleClick = async () => {
    const combinedId = currentUser.uid > users.uid ? currentUser.uid + users.uid : users.uid + currentUser.uid

    try {
      const res = await getDoc(doc(db, 'chats', combinedId))

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combinedId), {messages: []})

        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId+'.userInfo']: {
            uid: users.uid,
            email: users.email
          },
          [combinedId+'.date']: serverTimestamp()
        })

        await updateDoc(doc(db, 'userChats', users.uid), {
          [combinedId+'.userInfo']: {
            uid: currentUser.uid,
            email: currentUser.email
          },
          [combinedId+'.date']: serverTimestamp()
        })
      }
    } catch (err) {

    }
  }

  return (
    <div className={cl.container_chat}>
      <div className={cl.body_chat}>
        <div className={cl.name_chat} onClick={handleClick}></div>
      </div>
    </div>
  )
}

export default ChatRoom