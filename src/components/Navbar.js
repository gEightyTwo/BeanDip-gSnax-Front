import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

render(){
  return(
  <header>
  <div className="jumbotron jumbotron-billboard">
    <div className="img"></div>
    <div className="nav">
      <div className='navbar'>
        <div className='navlogo'>
          <h2>BeanDip</h2>
        </div>
        <div className='navlinks'>
          { this.props.userState.id ? <Button bsStyle="primary" bsSize="large">Log Out</Button> : <SignInModal /> }
        </div>
      </div>
    </div>
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

</header>)
}
}



const mapStateToProps = ({ userState }) => ({ userState })
export default connect(mapStateToProps)(Navbar)
