import { useState } from "react"

const Inputs = ({email, setEmail, password, setPassword}) => {

  return (
    <div className="inputs-container">
      <input 
        type='email' 
        placeholder='E-mail'
        className='input-text' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type='password'
        placeholder='Password'
        className='input-text' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  )
}

export default Inputs