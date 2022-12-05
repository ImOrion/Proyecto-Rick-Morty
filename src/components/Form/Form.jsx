import React from 'react'
import Validation from './Validation';
import { useState } from 'react'
import "./Form.css"

const Form = (props) => {
    const [userData, setUserData] = useState({
         username: '', 
         password: '' });

    const [errors, setErrors] = useState({
            username: '', 
            password: '' });    

    const handleChange = (event) => {
        setUserData({...userData,
            [event.target.name]: event.target.value,
        })
        setErrors(
          Validation({...userData,
            [event.target.name]: event.target.value 
        }))
    }    
    
    function handleSubmit (evento){
      evento.preventDefault()
      if(Object.keys(errors).length === 0){
        props.login(userData)
      }
      else alert('Debes ingresar los datos correctamente')
    }
  console.log(userData)


  return (
    <div className='logIn-container'>
      <form onSubmit={handleSubmit}>
      <label>
        <h2>Welcome to!</h2>
        <h2>Rick & Morty App</h2>
        <input className='email-input' onChange={handleChange} type="email" name='username'  value={userData.username}/>
        <input className='pass-input' onChange={handleChange} type="password" name='password'value={userData.password}/>
        <button className='logIn-button' type="submit">Log In</button>
        
      </label>
      </form>
    </div>
  )
}

export default Form;