import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'
import { bindActionCreators } from 'redux'
import AddReview from '../components/AddReview'
import { getAllRev } from '../actions'
import { postReview } from '../actions'



class Reviews extends Component{
  constructor(props){
    super(props)
    this.state = {
      review: false
    };
  }

  componentDidMount(){
    this.props.getAllRev()
  }


  toggleReview = () => {
    this.setState({review: !this.state.review});
  }

  handleReview = (title, description, rating, userID, snackID) => {
    this.props.postReview(this.props.snackId, userID, title, description, rating)
  }

  render(){
    const filtered = this.props.reviewList.filter(rev => rev.snack_id === this.props.snackId)
    const averages = filtered.map(ele => ele.rating).reduce((total, rate) => total + parseInt(rate), 0) / filtered.length
    const {
      handleReview,
      toggleReview
    } = this
    return (
      <div>
      <div id="averageRating">
        { averages ?  `Average User Rating: ${averages}` : null}
      </div>
      {
        filtered.map(review => <Review key={review.id} review={review} />)
      }
      {
      this.state.review
        ? <AddReview {...{toggleReview, handleReview}}/>
        : null
      }
        <button id="addreviewBtn" onClick={toggleReview}>{this.state.review === false ? "Add Review" : "Cancel"}</button>
      </div>
    )

  }
}

const mapStateToProps = ({ reviewList }) => ({ reviewList })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllRev, postReview }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
