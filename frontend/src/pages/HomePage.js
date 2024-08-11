import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const [myLink, setMyLink] = useState([])
  const [ sourceLink, setSourceLink ] = useState([])

  const createLink = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/link/shortener/', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
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