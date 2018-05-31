import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllRev, postReview } from '../actions'
import Review from '../components/Review'
import AddReview from '../components/AddReview'



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

  handleReview = (title, description, rating) => {
    this.props.postReview(this.props.snackId, this.props.userState.id, title, description, rating)
  }


  render(){
    const filtered = this.props.reviewList.filter(rev => rev.snack_id === this.props.snackId)
    const averages = filtered.map(ele => ele.rating).reduce((total, rate) => total + parseInt(rate), 0) / filtered.length
    const {
      handleReview,
      toggleReview
    } = this
    return (
      <div >
      <div id="averageRating">
        { averages ?  `Average User Rating: ${averages}` : null}
      </div>
      {
        filtered.map(review => <Review key={review.id} review={review} />)
      }
        { this.state.review ?
         <AddReview {...{toggleReview, handleReview}}/>
          : null}

  {(this.props.userState.id && filtered.every(review => this.props.userState.id !== review.user_id)) ? <button id="addreviewBtn" onClick={toggleReview}>{this.state.review === false ? "Add Review" : "Cancel"}</button> : null }
      </div>
    )

  }
}

const mapStateToProps = ({ reviewList, userState }) => ({ reviewList, userState })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllRev, postReview }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
