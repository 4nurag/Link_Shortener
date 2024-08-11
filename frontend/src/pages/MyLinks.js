import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'


const MyLinks = () => {
  const [ links, setLinks ] = useState([])

  const getLinks = async() => {
      const response = await fetch('http://127.0.0.1:8000/api/link/get-links/')
      const data = await response.json()
      setLinks(data)
      console.log(data)
  }

  useEffect(() => {
    getLinks()
  },[])

  const handleDelete = async (hash) => {
    await fetch(`http://127.0.0.1:8000/api/link/delete-link/${hash}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })
    getLinks()
  }

  return (
    <div className="container-sm mt-5">
        <ul className="list-group">
          {links.map((link, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link to={link.source_link} target="_blank">{link.source_link.slice(0, 50)}</Link>
              <Link to={`/link/${link.hash}/`} target="_blank">Https://mydomain.com/link/{link.hash}/</Link>
              <div onClick={()=>(handleDelete(link.hash))} className="btn btn-danger">Delete</div>
          </li>
          ))}
          
        </ul>
    </div>
  )
}

export default MyLinks