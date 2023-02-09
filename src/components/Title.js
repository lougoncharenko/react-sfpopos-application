import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../styles/title.css'

function Title() {
    return (
      <div className='Title'>
        <h1 >SFPOPOS</h1>
        <div className="Title-Subtitle">
            San Franciscos Privately Owned Public Spaces
        </div>
        <div>
        <div>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </div>
        </div>
      </div>
    )
  }

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
  
  export default Title