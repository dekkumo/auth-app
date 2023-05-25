import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import {setUser} from '../../store/slices/userSlice'
import {useNavigate, Link} from 'react-router-dom'
import cl from './Login.module.scss'
import Form from '../Form/Form'

const Login = () => {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }))
        navigate('/mainpage', {replace: true}) 
      })
      .catch(() => alert('Invalid user'))
  }

  let text = 'Login'
  
  return (
    <div className="_container">
      <Form 
        text={text} 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleClickForm={handleLogin}
        title={text}
      />
      <div className={cl.login_container}>
        <div className={cl.login_text}>Нет аккаунта?</div>
        <Link to='/signup'><a className={cl.login_link}>Зарегистрироваться</a></Link>
      </div>
    </div>
  )
}

export default Login