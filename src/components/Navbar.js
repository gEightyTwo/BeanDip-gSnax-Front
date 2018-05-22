import React from 'react'
// import { Link } from 'react-router-dom'

export default(props) => (
  <div className="nav">
      <div className='navbar'>
        <div className='navlogo'>
          <h3>BeanDip</h3>
        </div>
        <div className='navlinks'>
          <a className="btn btn-sm btn-outline-secondary" to="/">Sign up</a>
          <a className="btn btn-sm btn-outline-secondary" to="/login">Sign in</a>
          <a href="#" className='hidden'>Log Out</a>
        </div>
      </div>
    </div>
)
