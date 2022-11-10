import React from 'react'

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validar =(props)=>{
  console.log(props);
  const errors ={};

  if(!regexEmail.test(props.username)){
    errors.username = "Debe ser un correo electrónico"
  }
  if(!props.username){
    errors.username = "Debe llenar este campo"
  }
  if(props.username){
    errors.name = "Debe tener 35 carateres o menos"
  }

  if(props){
    errors.phone="Sólo números positivos"
  }
  return errors;
}

export default function Form(props) {

  const [userData, setUserData] = React.useState({ username: '', password: '' });
  const [error, setError]= React.useState({})


  const email =(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value})
    setError(validar({...error,[event.targe.name]:event.target.value}))
  }


  console.log(userData)


  return (
    <div>
      <label>
        <input onChange={email} type="email" name='username'/>
        <input onChange={email} type="password" name='password'/>
        <button onClick={validar}>Log In</button>
      </label>
    </div>
  )
}
