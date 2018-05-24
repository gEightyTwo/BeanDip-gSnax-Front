import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

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
  render() {
    const {
      review: {
        first_name,
        title,
        text,
        rating,
        snack_id,
        user_id
      }
    } = this.props
    return (
      <div className="review-block">
      <div className="row">
        <div className="col-12">
          <div className="review-block-user">{first_name} says:</div>
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
        </div>
      </div>
    </div>)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(null, mapDispatchToProps)(Review)
