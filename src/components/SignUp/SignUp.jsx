import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import './SignUp.scss'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Inputs from '../Inputs/Inputs'
import {setUser} from '../../store/slices/userSlice'

const Authorization = () => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    console.log(email)
    console.log(password)
    e.preventDefault()
    const auth = getAuth()
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }))
        navigate('/mainpage', {replace: true}) 
      })
      .catch(console.error)
  }

  return (
    <div className='_container'>
      <form className='form'>
        <h2 className='title'>Sign Up</h2>
        <Inputs 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <div className="buttons-container">
          <button 
            className='button' 
            onClick={(e) => handleRegister(e)}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="signup-container">
        <div className="signup-text">Уже зарегистрирован?</div>
        <Link to='/login'><a className="signup-link">Войти</a></Link> 
      </div>
    </div>
  )
}

export default Authorization