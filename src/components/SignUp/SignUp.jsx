import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import cl from './SignUp.module.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {setUser} from '../../store/slices/userSlice'
import Form from '../Form/Form'
import { doc, setDoc } from "firebase/firestore"; 
import { db, auth } from '../../firebase'

const Authorization = () => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [error, setError] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const handleRegister = (e) => {
  //   e.preventDefault()
  //   const auth = getAuth()
  //   const { email, uid } = auth.currentUser;
    
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(({user}) => {
  //       dispatch(setUser({
  //         email: user.email,
  //         token: user.accessToken,
  //         id: user.uid
  //       }))
  //       navigate('/mainpage', {replace: true}) 
  //     })
  //     .catch(setError(true))

  //   setDoc(doc(db, "users", uid), {
  //     email: email,
  //     id: uid
  //   });
  // }

  const handleRegister = async (e) => {
    e.preventDefault()

    // const {email, uid} = auth.currentUser

    try {
      await createUserWithEmailAndPassword(auth, email, password)

      dispatch(setUser({
        email: email,
        id: auth.currentUser.uid
      }))

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        email: email,
        id: auth.currentUser.uid
      });

      await setDoc(doc(db, "userChats", auth.currentUser.uid), {})

    } catch(err) {
      setError(true)
    }

    // navigate('/mainpage', {replace: true})
  }

  let text = 'Sign Up'

  return (
    <div className='_container'>
      <Form 
        text={text}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword} 
        handleClickForm={handleRegister}
        title={text}
      />
      <div className={cl.signup_container}>
        <div className={cl.signup_text}>Уже зарегистрирован?</div>
        <Link className={cl.signup_link} to='/login'>Войти</Link> 
      </div>
      {error && <span>Что-то пошло не так</span>}
    </div>
  )
}

export default Authorization