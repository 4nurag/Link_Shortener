import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

const HomePage = () => {

  const [myLink, setMyLink] = useState([])
  const [ sourceLink, setSourceLink ] = useState([])
  const { userInfo, updateUserInfo } = useContext(UserContext)

  const createLink = async () => {
    const headers = {
      "Content-Type":"application/json",

    }

    if (userInfo.access_token){
      headers["Authorization"] = `Bearer ${userInfo.access_token}`
    }
    const response = await fetch('/api/link/shortener/', {
        method: "POST",
        headers: headers,
        body:JSON.stringify({
            "source_link": sourceLink,
        })

    })
    const data = await response.json()
    setMyLink(data)
  }

  const handleLinkFieldChange = (value) => {
    setSourceLink(value)
  }

  const handleCreateSubmit = (event) => {
    event.preventDefault()
    createLink()
  }
  

  return (
    <div className="container-md mt-5">
        <form className="d-flex" onSubmit={handleCreateSubmit}> 
            <input onChange={(e) => (handleLinkFieldChange(e.target.value))} className="form-control me-2"/>
            <button className="btn btn-outline-success" type="submit">Make it short!</button>
        </form>
        <div className="container-sm mt-5">
            <div className="card">
                <div className="card-body">
                  <Link to={`/link/${myLink.hash}`} target="_blank">
                      Https://mydomain.com/link/{myLink?.hash}/
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage