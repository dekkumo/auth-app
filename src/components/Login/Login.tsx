import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {setUser} from '../../store/slices/userSlice'
import {useNavigate, Link} from 'react-router-dom'
import cl from './Login.module.scss'
import Form from '../Form/Form'
import { useAppDispatch } from '../../hook'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}: {user: any}) => {
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
        <Link className={cl.login_link} to='/signup'>Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default Login