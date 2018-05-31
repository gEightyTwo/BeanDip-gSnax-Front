import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
// import { withAuthentication, AuthenticationService } from '../helpers'
import {Button} from 'react-bootstrap'
import {logoutSetState} from '../actions'

import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<header>
      <div className="nav">
        <div className='navbar'>
          <a className="navbar-brand">BeanDip</a>
          <div className='navlinks'>
            {
              this.props.userState.id
                ? <Button onClick={() => {
                      console.log();
                      localStorage.setItem('token', '')
                      this.props.logoutSetState()
                    }} bsStyle="link" bsSize="large">Log Out</Button>
                : <SignInModal/>
            }
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-billboard">
        <div className="img"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {
                this.props.userState.id
                  ? <h1>{`Welcome, ${this.props.userState.first_name} :)`}</h1>
                  : <div>
                      <h2>
                        Have strong opinions about food? <br/>
                        Sign up to find out which ones are the best!
                      </h2>
                      <br/>
                      <br/>
                      <SignUpModal/>
                    </div>

              }
            </div>
          </div>
        </div>
      </div>

    </header>)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  logoutSetState
}, dispatch)
const mapStateToProps = ({userState}) => ({userState})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
