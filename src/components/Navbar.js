import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withAuthentication, AuthenticationService } from '../helpers'
import {Button} from 'react-bootstrap'
import {logoutSetState} from '../actions'

// import {Link} from 'react-router-dom'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

render(){
  return(
  <header>
  <div className="">
    <div className="nav">
      <div className='navbar'>
        <a className="navbar-brand">BeanDip</a>
        <div className='navlinks'>
          { this.props.userState.id ? <Button onClick={ () => {
            console.log();
            localStorage.setItem('token', '')
            this.props.logoutSetState()
          }} bsStyle="primary" bsSize="large">Log Out</Button> : <SignInModal /> }
        </div>
      </div>
    </div>
    <div className="jumbotron jumbotron-billboard">
      <div className="img"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 text="text">SnackTime</h2>
            {this.props.userState.id ? <p>{`Welcome, ${this.props.userState.email}!`}</p> : <SignUpModal />}
            <p>
              Find out what other people are saying about your favorite snacks!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</header>)
}
}


const mapDispatchToProps = (dispatch) => bindActionCreators({logoutSetState}, dispatch)
const mapStateToProps = ({ userState }) => ({ userState })
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
