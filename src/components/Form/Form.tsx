import React from 'react'
import cl from './Form.module.scss'

interface FormProps {
  text: string, 
  email: string, 
  setEmail: (str: string) => void, 
  password: string, 
  setPassword: (str: string) => void,
  handleClickForm: (e: React.MouseEvent<HTMLButtonElement>) => void, 
  title: string
}

const Form: React.FC<FormProps> = ({text, email, setEmail, password, setPassword, handleClickForm, title}) => {

  return (
    <form className={cl.form}>
      <h2 className={cl.title}>{title}</h2>
      <div className={cl.inputs_container}>
      <input 
        type='email' 
        placeholder='E-mail'
        className={cl.input_text}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type='password'
        placeholder='Password'
        className={cl.input_text}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className={cl.buttons_container}>
        <button 
          onClick={(e) => handleClickForm(e)} 
          className={cl.button}
        >
          {text}
        </button>
      </div>
    </form>
  )
}

export default Form