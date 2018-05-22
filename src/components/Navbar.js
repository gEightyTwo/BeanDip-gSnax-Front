import React from 'react'
// import {Link} from 'react-router-dom'

export default(props) => (
  <header>
  <div className="jumbotron jumbotron-billboard">
    <div className="img"></div>
    <div className="nav">
      <div className='navbar'>
        <div className='navlogo'>
          <h2>BeanDip</h2>
        </div>
        <div className='navlinks'>
          <btn className="btn btn-outline-secondary" to="/login">Sign in</btn>
          <button className='hidden'>Log Out</button>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 text="text">SnackTime</h2>
          <p>
            Find out what other people are saying about your favorite snacks!
          </p>
          <a href="" className="btn btn-success btn-lg">Sign Up</a>
        </div>
      </div>
    </div>
  </div>

</header>)
