import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

const Header = () => {
  const { userInfo, updateUserInfo } = useContext(UserContext)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Link Shortner!</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mylinks/">MyLinks</Link>
        </li>
      </ul>
      <span className="navbar-text">
        {userInfo.username ? (
            <>Hello {userInfo?.username} ! <Link to="/logout/">Logout</Link></>
        ):(
          <div className="d-flex">
          <Link className="nav-link" to='/login/'>Login</Link>
          /
          <Link className="nav-link" to='/register/'>Register</Link>
        </div>
        )}
        
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header