import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Inputs from '../Inputs/Inputs'
import { useDispatch } from 'react-redux'
import {setUser} from '../../store/slices/userSlice'
import {useNavigate, Link} from 'react-router-dom'
import './Login.scss'

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
        console.log(user)
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }))
        navigate('/mainpage', {replace: true}) 
      })
      .catch(() => alert('Invalid user'))
  }
  
  return (
    <div className="_container">
      <form className='form'>
        <h2 className='title'>Login</h2>
        <Inputs
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword} 
        />
        <div className="buttons-container">
          <button onClick={(e) => handleLogin(e)} className='button'>Login</button>
        </div>
      </form>
      <div className="login-container">
        <div className="login-text">Нет аккаунта?</div>
        <Link to='/signup'><a href="" className="login-link">Зарегистрироваться</a></Link>
      </div>
    </div>
  )
}

export default Login