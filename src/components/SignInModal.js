import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { request } from '../helpers'
import {loginSetState} from '../actions'
import {Modal, Button} from 'react-bootstrap'


class SignInModal extends React.Component {
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
  handleSignIn = event => {
    event.preventDefault()
    const { inputEmail, inputPassword } = event.target
    request('/auth/token','post', { username: inputEmail.value, password: inputPassword.value })
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
  render() {
    return (<div className="modal-container">
      <Button bsStyle="link" bsSize="large" onClick={() => this.setState({show: true})}>
        Sign In
      </Button>

      <Modal show={this.state.show} onHide={this.handleHide} container={this} aria-labelledby="contained-modal-title">
        <Modal.Header>
          <Modal.Title id="contained-modal-title">
            {this.props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Sign In</h2>
          <form onSubmit={this.handleSignIn}>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input type="email" className="form-control" name="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" className="form-control" name="inputPassword" placeholder="Password"/>
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

export default connect(null, mapDispatchToProps)(SignInModal)
