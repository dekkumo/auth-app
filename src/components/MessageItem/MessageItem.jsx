import React from 'react'
import cl from './MessageItem.module.scss'
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import cn from 'classnames'

const MessageItem = ({message}) => {

  const [user] = useAuthState(auth);

  return (
    <div className={user.uid === message.mesId ? cl.item : cn(cl.item, cl.other)}>
      <div className={cl.name}>{message.name}</div>
      <div className={cl.text}>{message.text}</div>
    </div>
  )
}

export default MessageItem