import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

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
          <form>
            <div className="form-group">
              <label htmlFor="fName">First Name</label>
              <input type="text" className="form-control" id="fName" placeholder="Pleae enter your First Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="lName">Last Name</label>
              <input type="text" className="form-control" id="lName" placeholder="Please enter your Last Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(null, mapDispatchToProps)(SignUpModal)
