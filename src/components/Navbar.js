import React from 'react'
import {connect} from 'react-redux'
import { withAuthentication, AuthenticationService } from '../helpers'

// import {Link} from 'react-router-dom'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

const Navbar = (props) => (
  <header>
  <div className="jumbotron jumbotron-billboard">
    <div className="img"></div>
    <div className="nav">
      <div className='navbar'>
        <div className='navlogo'>
          <h2>BeanDip</h2>
        </div>
        <div className='navlinks'>
          { this.props.authState ? <button>Log Out</button> : <SignInModal /> }
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
          {<SignUpModal />}
        </div>
      </div>
    </div>
  </div>

</header>)



const mapStateToProps = ({ authState }) => ({ authState })
export default connect(mapStateToProps)(Navbar)
