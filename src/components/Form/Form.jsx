import React from 'react'
import cl from './Form.module.scss'

const Form = ({text, email, setEmail, password, setPassword, handleClickForm, title}) => {

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