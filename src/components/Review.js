import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Review extends React.Component{
  constructor(props){
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
  render(){
    const {review:{title, text, rating, snack_id, user_id}} = this.props
    return (
      <div className="col-12">
        <div>{title}</div>
        <div>{text}</div>
        <div>{rating}</div>
        <div>{snack_id}</div>
        <div>{user_id}</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch)

export default connect(null, mapDispatchToProps)(Review)
