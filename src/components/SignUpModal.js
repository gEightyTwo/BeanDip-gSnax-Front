import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { request, AuthenticationService } from '../helpers'
import {loginSetState} from '../actions'
import {Modal, Button} from 'react-bootstrap'

// import Reviews from '../containers/Reviews'

class SignUpModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({show: false});
  }
  handleSignIn(email, password) {
    request('/auth/token','post', { username: email, password: password })
    .then(response => {
      this.setState({ showErrorMessage: false })
      localStorage.setItem('token', response.data.token)
      return request('/auth/token')
    })
    .then(response => {
      console.log(response)
      this.props.loginSetState(response.data)
      this.handleHide
    })
    .catch(error => {
      console.log(error)
      this.setState({showErrorMessage: true})
    })
  }
  handleSignUp = event => {
    event.preventDefault()
    const {fname:{value:fname}, lname:{value:lname}, email:{value:email}, password:{value:password}} = event.target
    request('/users','post', { fname, lname, email, password })
    .then(response => {
      this.handleSignIn(email, password)
    })
  }
  render() {
    return (<div className="modal-container">
      <Button bsStyle="primary" bsSize="large" onClick={() => this.setState({show: true})}>
        Sign Up!
      </Button>

      <Modal show={this.state.show} onHide={this.handleHide} container={this} aria-labelledby="contained-modal-title">
        <Modal.Header>
          <Modal.Title id="contained-modal-title">
            {this.props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSignUp}>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input type="text" className="form-control" id="fname" placeholder="Pleae enter your First Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input type="text" className="form-control" id="lname" placeholder="Please enter your Last Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>);
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({loginSetState}, dispatch)

export default connect(null, mapDispatchToProps)(SignUpModal)
