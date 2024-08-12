import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState([])

  const doLogin = async() => {
      const response = await fetch('/api/user/token/', {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body:JSON.stringify(form)
      })

      if (response.ok){
          const data = await response.json()
          localStorage.setItem('access_key', data.access)
          navigate('/')
          window.location.reload()

      }
  }

  const handleInputChange = (e) => {
      const {name, value} = e.target
      setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      doLogin()
  }

  return (
    <form className="container-sm w-25" onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input onChange={handleInputChange} type="username" class="form-control" name="username"/>
        </div>
            <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input onChange={handleInputChange} type="password" class="form-control" name="password"/>
        </div>
           
            <button type="submit" class="btn btn-primary">Login</button>
    </form>
    
  )
}

export default LoginPage