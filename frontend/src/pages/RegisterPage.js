import React from 'react'

const RegisterPage = () => {
  return (
        <form className="container-sm w-25">
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="email" class="form-control" name="username"/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" name="password"/>
        </div>
        <div class="mb-3">
            <label for="password2" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" name="password2"/>
        </div>
           
            <button type="submit" class="btn btn-primary">Register</button>
    </form>

  )
}

export default RegisterPage