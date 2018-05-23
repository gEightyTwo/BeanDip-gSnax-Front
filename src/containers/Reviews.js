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
  render(){
    const filtered = this.props.reviewList.filter(rev => rev.snack_id === this.props.snackId)
    // const filtered = []
    return (
      <div>
      {
        filtered.map(review => <Review key={review.id} review={review} />)
      }
      </div>
    )

  }
}

const mapStateToProps = ({ reviewList }) => ({ reviewList })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllRev }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
