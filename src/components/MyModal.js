import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Modal, Button} from 'react-bootstrap'

import Reviews from '../containers/Reviews'

class MyModal extends React.Component {
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
        More
      </Button>

      <Modal show={this.state.show} onHide={this.handleHide} container={this} aria-labelledby="contained-modal-title">
        <Modal.Header>
          <Modal.Title id="contained-modal-title">
            {this.props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="block-description">
          <img alt="product" src={`${this.props.img}`}/>
          <p>
            {this.props.description}
          </p>
        </div>
          <Reviews snackId={this.props.ogSnackId}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>);
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(null, mapDispatchToProps)(MyModal)
