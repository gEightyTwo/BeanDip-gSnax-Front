import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Button, ButtonToolbar} from 'react-bootstrap'
import { editReview, deleteReview } from '../actions'



class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }


  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  editReview = () => {
    // console.log(this.props.userState)
    console.log(this.props.review)
    // this.props.editReview()
  }

  removeReview = () => {
    console.log(this.props)
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const {
      review: {
        title,
        text,
        rating,
        user_id
      }
    } = this.props
    return (
      <div className="review-block">
      <div className="row">
        <div className="col-12">
          <div className="review-block-user">{this.props.userState.email} says:</div>
          <div className="review-block-title">{title}</div>
          <div className="review-block-rate">
            <button type="button" className={rating >= 1 ? 'btn btn-warning btn-xs' : 'btn btn-default btn-grey btn-xs'} aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className={rating >= 2 ? 'btn btn-warning btn-xs' : 'btn btn-default btn-grey btn-xs'} aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className={rating >= 3 ? 'btn btn-warning btn-xs' : 'btn btn-default btn-grey btn-xs'} aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className={rating >= 4 ? 'btn btn-warning btn-xs' : 'btn btn-default btn-grey btn-xs'} aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className={rating >= 5 ? 'btn btn-warning btn-xs' : 'btn btn-default btn-grey btn-xs'} aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
          </div>
          Description:
          <div className="review-block-description">{text}</div>
            {user_id === this.props.userState.id ? <ButtonToolbar>
              <Button bsSize="xsmall" bsStyle="info" onClick={this.editReview}>Edit</Button>
              <Button bsSize="xsmall" bsStyle="danger" onClick={this.removeReview}>Delete</Button>
            </ButtonToolbar> : null}
        </div>
      </div>
    </div>)
  }
}


const mapStateToProps = ({ reviewList, userState }) => ({ reviewList, userState })
const mapDispatchToProps = (dispatch) => bindActionCreators({editReview, deleteReview}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Review)
