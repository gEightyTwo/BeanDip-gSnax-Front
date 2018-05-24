import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../components/Review'
import { bindActionCreators } from 'redux'

import { getAllRev } from '../actions'


class Reviews extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.getAllRev()
  }

  addReview() {
    console.log("adding")
  }

  render(){
    const filtered = this.props.reviewList.filter(rev => rev.snack_id === this.props.snackId)
    return (
      <div>
        <form id="addReview">
        </form>
      {
        filtered.map(review => <Review key={review.id} review={review} />)
      }
      <button id="addreviewBtn" onClick={this.addReview}>Add Review</button>
      </div>
    )

  }
}

const mapStateToProps = ({ reviewList }) => ({ reviewList })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllRev }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
