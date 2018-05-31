import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Button, ButtonGroup, Well} from 'react-bootstrap'
import { updateReview, deleteReview } from '../actions'



class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateReview: false,
      showModal: false
    }
  }


  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  toggleUpdate = () => {
    this.setState({updateReview: !this.state.updateReview});
  }

  removeReview = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const {
      review: {title, text, rating, user_id }
    } = this.props
    return (
      <div className="review-block">
        { this.state.updateReview ?
          <form className="form-horizontal well" onSubmit={event => {
            event.preventDefault();
            this.props.updateReview(this.props.review.id, event.target.title.value, event.target.description.value, event.target.rating.value);
            this.toggleUpdate();
          }}>
            <div className="form-group">
                <h4>Write Review</h4>
            </div>
            <div className="review-form"> Rating:
              <select name="rating" defaultValue={rating}>
                <option value="1">One Star</option>
                <option value="2">Two Stars</option>
                <option value="3">Three Stars</option>
                <option value="4">Four Stars</option>
                <option value="5">Five Stars</option>
              </select>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="subject" defaultValue={title} placeholder="Title" name="title" required/>
            </div>
            <div className="form-group">
                <textarea name="description" id="description" defaultValue={text} className="form-control" required></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
          : null}

{ !this.state.updateReview ?
      <div className="row">
        <div className="col-12">
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
          {this.props.review.first_name}:
          <Well className="review-block-description">{text}</Well>
            {user_id === this.props.userState.id ? <ButtonGroup>
              <Button bsSize="xsmall" bsStyle="info" onClick={this.toggleUpdate}>Edit</Button>
              <Button bsSize="xsmall" bsStyle="danger" onClick={this.removeReview}>Delete</Button>
            </ButtonGroup> : null}
        </div>
      </div>
      : null
  }
      </div>
    )
  }
}


const mapStateToProps = ({ reviewList, userState }) => ({ reviewList, userState })
const mapDispatchToProps = (dispatch) => bindActionCreators({updateReview, deleteReview}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Review)
