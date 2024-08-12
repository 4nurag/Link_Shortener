import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate()

    const [ form, setForm ] = useState([])

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }

    const doRegister = async()=>{
        const response = await fetch('/api/user/register/', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        })

        if (response.ok){
            navigate('/login/')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        doRegister()
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
        <div class="mb-3">
            <label for="password2" class="form-label">Confirm Password</label>
            <input onChange={handleInputChange} type="password" class="form-control" name="password2"/>
        </div>
           
            <button type="submit" class="btn btn-primary">Register</button>
    </form>

  )
}

export default RegisterPage